from app.models import db, Workspace

# Adds a demo user, you can add other users here if you want
def seed_workspaces():
    workspace1 = Workspace(name="divide&conquer",user_id=1)
    workspace2 = Workspace(name="App Academy",user_id=1)
    workspace3 = Workspace(name="Career Quest",user_id=1)
    workspace4 = Workspace(name="Career Quest",user_id=2)
    
    db.session.add(workspace1)
    db.session.add(workspace2)
    db.session.add(workspace3)
    db.session.add(workspace4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_workspaces():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
