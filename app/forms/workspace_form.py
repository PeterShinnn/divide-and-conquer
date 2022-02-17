from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class WorkspaceForm(FlaskForm):
    workspace = StringField('workspace', validators=[DataRequired()])
