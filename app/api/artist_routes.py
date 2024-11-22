from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Tour

artist_routes = Blueprint('artists', __name__)

@artist_routes.route('/<int:id>/tours')
def all_tours():
    pass
