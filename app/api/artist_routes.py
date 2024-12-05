from flask import Blueprint, jsonify
from flask_login import login_required
from sqlalchemy.orm import joinedload
from app.models import User, Tour

artist_routes = Blueprint('artists', __name__)

# Get all artists
@artist_routes.route('/')
def artists():
    users = User.query.filter_by(is_artist = True).options(
        joinedload(User.img)
    ).all()
    # print("----------Users: ", [user.artist() for user in users], "-----------")
    return { "users": [user.artist() for user in users] }

# Get artist by Id
@artist_routes.route('/<int:artist_id>')
def one_artist(artist_id):
    user = User.query.get(artist_id)
    user = user.artist()
    if user:
        return user
    return {'errors': {'message': 'Artist Not Found'}}, 404


# Get latest tour
@artist_routes.route('/<int:artist_id>/latest-tour/')
def latest_tour(artist_id):
    tours = Tour.query.filter_by(artist_id = artist_id).options(
        joinedload(Tour.shows)
    ).all()

    tours = [tour.to_dict() for tour in tours]

    tour = sorted(tours, key=lambda tour: tour["id"], reverse=True)[0]

    return tour
