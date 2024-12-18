from flask import Blueprint, request
from flask_login import login_required, current_user
from datetime import datetime
from ..forms import AddTourForm, EditTourForm, AddShowForm, EditShowForm
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
        # print("-------------form data", data)
        dateTime = datetime.strptime(
            f"{data['date']} {data['time']}", "%Y-%m-%d %H:%M")

        show = Show(datetime = dateTime,
                    city = data['city'],
                    state = data['state'],
                    venue = data['venue'],
                    openers = data['openers'],
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
@tour_routes.route('<int:tour_id>/shows/<int:show_id>', methods=['PUT'])
@login_required
def edit_show(tour_id, show_id):
    form = AddShowForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    show = Show.query.get(show_id)

    if show.tour_id != tour_id:
        return { "errors": { "Bad Request": "Show does not belong to tour" }}

    if form.validate_on_submit():
        data = form.data
        date_time = datetime.strptime(
            f"{data['date']} {data['time']}", "%Y-%m-%d %H:%M")

        show.datetime = date_time
        show.city = data['city']
        show.state = data['state']
        show.venue = data['venue']
        show.openers = data['openers']
        db.session.commit()
        return show.to_dict()

    return form.errors, 401


# Delete tour
@tour_routes.route('<int:tour_id>', methods=['DELETE'])
@login_required
def delete_tour(tour_id):
    # form = AddShowForm()
    # form['csrf_token'].data = request.cookies['csrf_token']

    tour = Tour.query.get(tour_id)
    # print(tour)

    if not tour:
        return { "errors": { "Not Found": "Cannot find tour" }}, 404

    if tour.artist_id != current_user.id:
        return { "errors": { "unauthorized": "This show does not belong to you" }}, 401

    db.session.delete(tour)
    db.session.commit()
    return { "ok": "Successfully deleted" }


# Delete Show
@tour_routes.route('<int:tour_id>/shows/<int:show_id>', methods=['DELETE'])
@login_required
def delete_show(tour_id, show_id):
    # form = AddShowForm()
    # form['csrf_token'].data = request.cookies['csrf_token']

    show = Show.query.get(show_id)

    if show.tour_id != tour_id:
        return { "errors": { "Bad Request": "Show does not belong to tour" }}, 400

    if show.artist_id != current_user.id:
        return { "errors": { "unauthorized": "This show does not belong to you" }}, 401

    db.session.delete(show)
    db.session.commit()
    return { "ok": "Successfully deleted" }
