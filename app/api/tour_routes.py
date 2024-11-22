from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Tour

tour_routes = Blueprint('tours', __name__)


@tour_routes.route('/<int:id>')
def tour():
    pass
