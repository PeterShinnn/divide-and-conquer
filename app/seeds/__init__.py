from flask.cli import AppGroup
from .users import seed_users, undo_users
from .workspaces import seed_workspaces, undo_workspaces
from .task_categories import seed_categories, undo_categories
from .tasks import seed_tasks, undo_tasks

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_workspaces()
    seed_categories()
    seed_tasks()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_workspaces()
    undo_categories()
    undo_tasks()
    # Add other undo functions here

# Creates the `flask seed reset` command
@seed_commands.command('reset')
def reset():
    undo_users()
    undo_workspaces()
    undo_categories()
    undo_tasks()
    seed_users()
    seed_workspaces()
    seed_categories()
    seed_tasks()
