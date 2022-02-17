from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import TaskCategory

category_routes = Blueprint('categories', __name__)


@category_routes.route('/')
@login_required
def get_all_categories():
    categories = TaskCategory.query.all()
    return {'categories': [category.to_dict() for category in categories]}


@category_routes.route('/<int:id>')
@login_required
def get_one_category(id):
    category = TaskCategory.query.get(id)
    return category.to_dict()
