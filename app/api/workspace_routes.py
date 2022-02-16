from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Workspace

workspace_routes = Blueprint('workspaces', __name__)

@workspace_routes.route('/')
# @login_required
def get_all_workspaces():
    workspaces = Workspace.query.all()
    return {'workspaces': [workspace.to_dict() for workspace in workspaces]}


@workspace_routes.route('/<int:id>')
@login_required
def get_workspace_by_id(id):
    workspace = Workspace.query.get(id)
    return workspace.to_dict()
