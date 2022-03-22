from flask import Blueprint, request#, jsonify
from flask_login import login_required, current_user
from app.models import db, Task
from app.forms import EditTaskForm, EditTaskDateForm, TaskForm

task_routes = Blueprint('tasks', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@task_routes.route('/')
@login_required
def get_all_tasks():
    tasks = Task.query.all()
    return {'tasks': [task.to_dict() for task in tasks]}

@task_routes.route('/<int:id>')
@login_required
def get_task_by_id(id):
    task = Task.query.get(id)
    return task.to_dict()

@task_routes.route('/create', methods=["POST"])
@login_required
def create_task():
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        task = Task(description=form.data['description'], user_id=current_user.id, category_id=form.data['category_id'])
        db.session.add(task)
        db.session.commit()

        return task.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@task_routes.route('/<int:id>/edit', methods=["PATCH"])
@login_required
def edit_task(id):
    form = EditTaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        task = Task.query.get(id)
        task.description = form.data['description']
        task.status = form.data['status']
        
        db.session.commit()

        return task.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@task_routes.route('/<int:id>/edit/date', methods=["PATCH"])
@login_required
def edit_task_date(id):
    form = EditTaskDateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        print("heuh")
        task = Task.query.get(id)
        task.deadline = form.data['deadline']
        
        db.session.commit()

        return task.to_dict()
    print(form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@task_routes.route('/<int:id>/delete', methods=["DELETE"])
@login_required
def delete_task(id):
    task = Task.query.get(id)
    
    db.session.delete(task)
    db.session.commit()

    return task.to_dict()
