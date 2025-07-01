from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


class AddPostForm(FlaskForm):
    post = StringField('Post', validators=[DataRequired()])
    submit = SubmitField('Submit Post')
