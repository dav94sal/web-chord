from flask import Blueprint, request
from flask_login import login_required, current_user
from datetime import datetime
from ..forms import AddTourForm, EditTourForm, AddShowForm, EditShowForm
from app.models import Merch, db

merch_routes = Blueprint('merch', __name__)


# Get all artist merch
@merch_routes.route('/<int:artist_id>')
def get_all_merch(artist_id):
    merchandise = Merch.query.filter_by(artist_id = artist_id).all()
    return [merch.to_dict() for merch in merchandise]
