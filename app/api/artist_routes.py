from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Tour

artist_routes = Blueprint('artists', __name__)

# Get all artists
@artist_routes.route('/')
def artists():
    users = User.query.filter_by(is_artist = True).all()
    return { "users": [user.artist() for user in users]}

# Get latest tour
@artist_routes.route('/<int:artist_id>/latest-tour/')
def all_tours(artist_id):
    pass
