from datetime import datetime
from app.models import db, Workspace
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.forms import WorkSpaceForm, EditWorkSpaceForm

workspace_routes = Blueprint('workspaces', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@workspace_routes.route('/')
# @login_required
def get_all_workspaces():
    workspaces = Workspace.query.filter(Workspace.user_id == current_user.id).all()
    return {'workspaces': [workspace.to_dict() for workspace in workspaces]}


@workspace_routes.route('/<int:id>')
@login_required
def get_workspace_by_id(id):
    workspace = Workspace.query.get(id)
    return workspace.to_dict()

@workspace_routes.route('/<int:id>/edit', methods=['PATCH'])
@login_required
def update_workspace(id):
    form = EditWorkSpaceForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
        workspace = Workspace.query.get(id)
        workspace.name = form.data['name']
        workspace.updated_at = datetime.now()
        db.session.commit()
        return workspace.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@workspace_routes.route('/create', methods=['POST'])
@login_required
def create_workspace():
    form = WorkSpaceForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        workspace = Workspace(name=form.data['name'], user_id=current_user.id)
        
        db.session.add(workspace)
        db.session.commit()
        return workspace.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@workspace_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_workspace(id):
    workspace = Workspace.query.get(id)
    
    db.session.delete(workspace)
    db.session.commit()

    return workspace.to_dict()
