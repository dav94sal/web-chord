from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Tour

artist_routes = Blueprint('artists', __name__)

# Get one tour
@artist_routes.route('/<int:artist_id>/tours/<int:tour_id>')
def all_tours(artist_id, tour_id):
    pass
