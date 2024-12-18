from flask import Blueprint, request, jsonify
from app.models import User, Image, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from .aws_helpers import allowed_file, get_unique_filename, upload_file_to_s3, remove_file_from_s3

auth_routes = Blueprint('auth', __name__)


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': {'message': 'Unauthorized'}}, 401


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return form.errors, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    image = None

    if form.validate_on_submit():
        # print(form.file.data)
        if form.file.data:
            file = form.file.data
            #does the file exist and is it allowed?
            if not allowed_file(file.filename):
                # print("Invalid file type")
                return {"errors": "Invalid file type"}, 400

            # title = data.get("title")
            # genre = data.get("genre")

            file.filename = get_unique_filename(file.filename)
            upload_response = upload_file_to_s3(file)

            # Handle errors during upload
            if "errors" in upload_response:
                # print(upload_response.errors)
                return jsonify(upload_response), 400

            image = Image(
                imageable_type = "artist",
                # imageable_id = current_user.id,
                url = upload_response["url"],
            )
            db.session.add(image)

        # print(form.data["is_artist"])

        user = User(
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password'],
            is_artist=form.data["is_artist"],
            artist_name=form.data["artist_name"],
        )

        if image:
            user.img.append(image)

        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    # print(form.errors)
    return form.errors, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': {'message': 'Unauthorized'}}, 401
