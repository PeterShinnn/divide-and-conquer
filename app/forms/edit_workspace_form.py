from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

def my_length_check(form, field):
    if len(field.data) < 3 or len(field.data) > 50:
        raise ValidationError('Name must be between 3-50 characters')

class EditWorkSpaceForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
