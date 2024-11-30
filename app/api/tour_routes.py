from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Tour

tour_routes = Blueprint('tours', __name__)

# Get all artist tours
@tour_routes.route('/all')
@login_required
def tour():
    tours = Tour.query.filter_by(artist_id = current_user.id).all()
    return [tour.to_dict() for tour in tours]
