from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from wtforms import FloatField, StringField, SubmitField
from wtforms.validators import DataRequired


class MerchForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    price = FloatField('Price', validators=[DataRequired()])
    url =StringField('Url', validators=[DataRequired()])
    file = FileField('Upload Image', validators=[
        FileAllowed(["pdf", "png", "jpg", "jpeg", "gif"], 'Image files only!')
    ])
    submit = SubmitField('Create Merch')
