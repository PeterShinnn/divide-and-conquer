from lib2to3.pgen2.token import OP
from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField
from wtforms.validators import DataRequired 

class EditTaskForm(FlaskForm):
    status = StringField('status')
    description = StringField('description', validators=[DataRequired()])
    #deadline = DateField('deadline', validators=[Optional()])
    #category_id = IntegerField('Category_id', validators=[DataRequired()])

class EditTaskDateForm(FlaskForm):
    deadline = DateTimeField('deadline', format='%Y-%m-%dT%H:%M')
