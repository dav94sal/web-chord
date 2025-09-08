from flask import Blueprint,request, jsonify
from flask_login import login_required, current_user
from sqlalchemy.orm import joinedload
from app.models import Artist, Tour, Image, db
from app.forms.add_artist import AddArtistForm
from .aws_helpers import allowed_file, get_unique_filename, upload_file_to_s3, remove_file_from_s3

artist_routes = Blueprint('artists', __name__)

# Get all artists
@artist_routes.route('/')
def artists():
    artists = Artist.query.all()
    # print("----------Artists: ", [artist.to_dict() for artist in artists], "-----------")
    return { "artists": [artist.to_dict() for artist in artists] }

# Get artist by Id
@artist_routes.route('/<int:artist_id>')
def one_artist(artist_id):
    artist = Artist.query.get(artist_id)
    artist = artist.to_dict()
    if artist:
        return artist
    return {'errors': {'message': 'Artist Not Found'}}, 404


# Get latest tour
@artist_routes.route('/<int:artist_id>/latest-tour/')
def latest_tour(artist_id):
    tours = Tour.query.filter_by(artist_id = artist_id).options(
        joinedload(Tour.shows)
    ).all()

    tours = [tour.to_dict() for tour in tours]

    if tours:
        return sorted(tours, key=lambda tour: tour["id"], reverse=True)[0]
    else:
        return {"none": True}


# Create a new artist
@artist_routes.route('/new', methods=['POST'])
@login_required
def create_artist():
    form = AddArtistForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    image = None

    if form.validate_on_submit():
        if form.file.data:
            file = form.file.data
            #does the file exist and is it allowed?
            if not allowed_file(file.filename):
                return {"errors": "Invalid file type"}, 400

            file.filename = get_unique_filename(file.filename)
            upload_response = upload_file_to_s3(file)

            # Handle errors during upload
            if "errors" in upload_response:
                return jsonify(upload_response), 400

            image = Image(
                imageable_type='artist',
                imageable_id = current_user.id,
                url = upload_response["url"],
            )
            db.session.add(image)

        data = form.data
        artist = Artist(
            artist_name=data['artist_name'],
            x_url=data.get('x_url', ""),
            facebook_url=data.get('facebook_url', ""),
            instagram_url=data.get('instagram_url', ""),
            youtube_url=data.get('youtube_url', ""),
            spotify_url=data.get('spotify_url', ""),
            pandora_url=data.get('pandora_url', ""),
            user_id=current_user.id,
        )

        if image:
            artist.img.append(image)

        db.session.add(artist)
        db.session.commit()
        return artist.to_dict()
    return form.errors, 401
