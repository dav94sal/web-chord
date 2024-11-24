from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import Image, db
from ..forms import ImageForm
from .aws_helpers import upload_file_to_s3, get_unique_filename

image_routes = Blueprint('images', __name__)

# Add image
@image_routes.route('/', methods=['POST'])
@login_required
def new_image():
    """
    Creates a new image
    """
    form = ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    image = form.data["image"]
    image.filename = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)
    print("AWS: ", upload)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when you tried to upload
        # so you send back that error message (and you printed it above)
        return {"errors": upload}, 401

    url = upload["url"]
    
    if form.validate_on_submit():
        image = Image(
            imageable_type = "artist",
            imageable_id = current_user.id,
            url = url,
        )
        db.session.add(image)
        db.session.commit()
        return image.to_dict()
    return form.errors, 401
