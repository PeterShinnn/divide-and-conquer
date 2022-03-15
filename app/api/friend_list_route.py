from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

friend_list_routes = Blueprint('friendLists', __name__)
