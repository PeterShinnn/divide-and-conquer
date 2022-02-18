from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField#, DateTimeField
from wtforms.validators import DataRequired

class EditCategoryForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    #workspace_id = IntegerField('workspace_id', validators=[DataRequired()])
    #category_id = IntegerField('Category_id', validators=[DataRequired()])
    #deadline = DateTimeField('Deadline')
