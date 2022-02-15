from app.models import db, TaskCategory

# Adds a demo user, you can add other users here if you want
def seed_categories():
    category1 = TaskCategory(name="Back-end",user_id=1,workspace_id=1)
    category2 = TaskCategory(name="Front-end",user_id=1,workspace_id=1)
    category3 = TaskCategory(name="Styling",user_id=1,workspace_id=1)
    category4 = TaskCategory(name="Capstone Project",user_id=1,workspace_id=2)
    category5 = TaskCategory(name="Stand Up",user_id=1,workspace_id=2)
    category6 = TaskCategory(name="Resume",user_id=1,workspace_id=3)
    
    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
