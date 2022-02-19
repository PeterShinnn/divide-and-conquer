from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, TaskCategory
from app.forms import CategoryForm, EditCategoryForm

category_routes = Blueprint('categories', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

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

@category_routes.route('/create', methods=['POST'])
@login_required
def create_category():
    form = CategoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        category = TaskCategory(name=form.data['name'], user_id=current_user.id, workspace_id=form.data['workspace_id'])
        db.session.add(category)
        db.session.commit()
        
        return category.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@category_routes.route('/<int:id>/edit', methods=['PATCH'])
@login_required
def edit_category(id):
    form = EditCategoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        category = TaskCategory.query.get(id)
        category.name = form.data['name']
        db.session.commit()

        return category.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
