from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField
from wtforms.validators import DataRequired


class AddShowForm(FlaskForm):
    date = StringField('Date', validators=[DataRequired()])
    time = StringField('Time', validators=[DataRequired()])
    city = StringField("City", validators=[DataRequired()])
    state = StringField("State", validators=[DataRequired()])
    venue = StringField("Venue", validators=[DataRequired()])
    openers = StringField("Openers")
    tour_id = IntegerField("Tour Id", validators=[DataRequired()])
    submit = SubmitField('Create Show')
