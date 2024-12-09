from flask import Blueprint, request
from flask_login import login_required, current_user
from datetime import datetime
from ..forms import MerchForm
from app.models import Merch, db

merch_routes = Blueprint('merch', __name__)


# Get all artist merch
@merch_routes.route('/<int:artist_id>')
def get_all_merch(artist_id):
    merchandise = Merch.query.filter_by(artist_id = artist_id).all()
    return [merch.to_dict() for merch in merchandise]


# New Merch
@merch_routes.route('/new', methods=['POST'])
@login_required
def new_merch():
    form = MerchForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit:
        data = form.data
        merch = Merch(name=data['name'],
                      price=data['price'],
                      url=data['url'],
                      artist_id=current_user.id)
        db.session.add(merch)
        db.session.commit()
        return merch.to_dict()
    return form.errors, 401


# Edit Merch
@merch_routes.route('/<int:merch_id>', methods=["PUT"])
@login_required
def edit_merch(merch_id):
    form = MerchForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit:
        data = form.data
        merch = Merch.query.get(merch_id)

        merch.name = data['name']
        merch.price = data['price']
        merch.url = data['url']

        db.session.commit()
        return merch.to_dict()
    return form.errors, 401


# Delete Merch
