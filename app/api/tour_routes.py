from flask import Blueprint, request
from flask_login import login_required, current_user
from datetime import datetime
from ..forms import AddTourForm, EditTourForm, AddShowForm
from app.models import Tour, Show, db

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


# Add show to tour
@tour_routes.route('<int:tour_id>/shows', methods=['POST'])
@login_required
def addShow(tour_id):
    form = AddShowForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        dateTime = datetime.strptime(
            f"{data['date']} {data['time']}", "%Y-%m-%d %H:%M")

        show = Show(datetime = dateTime,
                    city = data['city'],
                    state = data['state'],
                    venue = data['venue'],
                    headliners = data['headliners'],
                    tour_id = tour_id,
                    artist_id = current_user.id,)

        db.session.add(show)
        db.session.commit()
        return show.to_dict()
    # print(form.errors)
    return form.errors, 401


# Edit a tour
@tour_routes.route('<int:tour_id>/edit', methods=['PATCH'])
@login_required
def edit_tour(tour_id):
    form = EditTourForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    tour = Tour.query.get(tour_id)

    if tour.name == form.data['name']:
        return {"errors": "Choose a new name"}, 409

    tour.name = form.data['name']
    db.session.commit()

    return tour.to_dict()


# Edit a show

