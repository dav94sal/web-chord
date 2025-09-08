from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


class AddArtistForm(FlaskForm):
    artist_name = StringField('Artist Name', validators=[DataRequired()])
    x_url = StringField('x_url')
    facebook_url = StringField('facebook_url')
    instagram_url = StringField('instagram_url')
    youtube_url = StringField('youtube_url')
    spotify_url = StringField('spotify_url')
    pandora_url = StringField('pandora_url')
    file = FileField('Upload Image', validators=[
        FileAllowed(["pdf", "png", "jpg", "jpeg", "gif"], 'Image files only!')
    ])
    submit = SubmitField('Submit Artist')
