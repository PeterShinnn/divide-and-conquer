from flask import Blueprint#, jsonify
from flask_login import login_required
from app.models import User, FriendRequest

request_routes = Blueprint('requests', __name__)

@request_routes.route('/')
@login_required
def get_requsts():
    requests = FriendRequest.query.all()
    return {'requests': [request.to_dict() for request in requests]}

@request_routes.route('/send', methods=['POST'])
@login_required
def send_friend_request():
    return {}
