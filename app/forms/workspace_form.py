from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class WorkSpaceForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
