from flask import Blueprint, request
from flask_login import login_required, current_user
from ..forms import AddTourForm
from app.models import Tour, db

tour_routes = Blueprint('tours', __name__)

# Get all artist tours
@tour_routes.route('/all')
@login_required
def tour():
    tours = Tour.query.filter_by(artist_id = current_user.id).all()
    return [tour.to_dict() for tour in tours]

# Create a new tour
@tour_routes.route('/new', methods=['POST'])
@login_required
def add_tour():
    form = AddTourForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        tour = Tour(name=form.data['name'],
                    artist_id=current_user.id)

        db.session.add(tour)
        db.session.commit()
        return tour.to_dict()
    return form.errors, 401
