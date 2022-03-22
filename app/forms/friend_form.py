from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class FriendRequestForm(FlaskForm):
    requester_id = IntegerField('requester_id', validators=[DataRequired()])
