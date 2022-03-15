from flask import Blueprint#, jsonify
from flask_login import login_required, current_user
from app.models import db, FriendRequest
from app.forms import FriendRequestForm

request_routes = Blueprint('requests', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@request_routes.route('/')
@login_required
def get_requsts():
    requests = FriendRequest.query.all()
    return {'requests': [request.to_dict() for request in requests]}

@request_routes.route('/send', methods=['POST'])
@login_required
def send_friend_request():
    form = FriendRequestForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        request = FriendRequest(friend_id=current_user.id, requester_id=form.data['requester_id'])
        db.session.add(request)
        db.session.commit()
        return request.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
