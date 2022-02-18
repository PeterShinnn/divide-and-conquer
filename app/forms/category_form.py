from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField#, DateTimeField
from wtforms.validators import DataRequired

class CategoryForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    workspace_id = IntegerField('workspace_id', validators=[DataRequired()])
