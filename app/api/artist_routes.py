from flask import Blueprint, jsonify
from flask_login import login_required
from sqlalchemy.orm import joinedload
from app.models import Artist, User, Tour

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
    user = Artist.query.get(artist_id)
    print("___---------user", user)
    # user = user.artist()
    if user:
        return user.to_dict()
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
