from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from .aws_helpers import allowed_file, get_unique_filename, upload_file_to_s3, remove_file_from_s3
from ..forms import MerchForm
from app.models import Merch, Image, db

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
    image = None

    if form.validate_on_submit:
        if form.file.data:
            file = form.file.data
            print("---------------backend file", file)
            #does the file exist and is it allowed?
            if not allowed_file(file.filename):
                # print("Invalid file type")
                return {"errors": "Invalid file type"}, 400

            # title = data.get("title")
            # genre = data.get("genre")

            file.filename = get_unique_filename(file.filename)
            upload_response = upload_file_to_s3(file)
            print("-----------------upload response: ", upload_response)
            # Handle errors during upload
            if "errors" in upload_response:
                # print(upload_response.errors)
                return jsonify(upload_response), 400

            image = Image(
                imageable_type = "merch",
                # imageable_id = current_user.id,
                url = upload_response["url"],
            )
            db.session.add(image)

        data = form.data
        merch = Merch(name=data['name'],
                      price=data['price'],
                      url=data['url'],
                      artist_id=current_user.id)

        if image:
            merch.img.append(image)

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
@merch_routes.route("/<int:merch_id>", methods=["DELETE"])
@login_required
def delete_merch(merch_id):
    merch = Merch.query.get(merch_id)

    if merch.artist_id != current_user.id:
        return { "errors": { "unauthorized": "This merch item does not belong to you" }}, 401

    images = Image.query.filter_by(imageable_id = merch_id).all()

    [db.session.delete(img) for img in images]

    db.session.delete(merch)
    db.session.commit()
    return { "ok": "Successfully deleted" }, 200
