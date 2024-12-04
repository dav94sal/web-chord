from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class EditShowForm(FlaskForm):
    date = StringField('Date', validators=[DataRequired()])
    time = StringField('Time', validators=[DataRequired()])
    city = StringField("City", validators=[DataRequired()])
    state = StringField("State", validators=[DataRequired()])
    venue = StringField("Venue", validators=[DataRequired()])
    headliners = StringField("Headliners")
    submit = SubmitField('Create Show')
