from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


class EditTourForm(FlaskForm):
    name = StringField('Name')
    submit = SubmitField('Create Tour')
