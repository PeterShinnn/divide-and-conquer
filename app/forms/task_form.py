from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField#, DateTimeField
from wtforms.validators import DataRequired

class TaskForm(FlaskForm):
    description = StringField('Name', validators=[DataRequired()])
    category_id = IntegerField('Category_id', validators=[DataRequired()])
    #deadline = DateTimeField('Deadline')
