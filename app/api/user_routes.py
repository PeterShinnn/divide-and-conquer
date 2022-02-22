from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user_by_id(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<search_query>')
@login_required
def search_user(search_query):
    print(search_query)
    users = User.query.filter(User.username.like(f'{search_query.lower()}%')).limit(5)
    return {'users': [user.to_dict() for user in users]}
