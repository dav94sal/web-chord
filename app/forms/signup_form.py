from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from wtforms import StringField, BooleanField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import User
from app.api.aws_helpers import ALLOWED_EXTENSIONS


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


# def artist_name_required(form, field):
#     artist_name = form.data
#     if not artist_name:
#         raise ValidationError("Artist name is required")


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists])
    email = StringField('Email', validators=[DataRequired(), user_exists])
    password = StringField('Password', validators=[DataRequired()])
    is_artist = BooleanField('Artist')
    # artist_name = StringField('Artist Name')
    file = FileField('Upload Image', validators=[
        FileAllowed(["pdf", "png", "jpg", "jpeg", "gif"], 'Image files only!')
    ])
    submit = SubmitField('Sign Up')
