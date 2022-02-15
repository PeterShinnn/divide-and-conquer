from app.models import db, Task

# Adds a demo user, you can add other users here if you want
def seed_tasks():
    task1 = Task(name="Create Database Tables",user_id=1,category_id=1)
    task2 = Task(name="Add table relations",user_id=1,category_id=1)
    task3 = Task(name="Create Seed Data",user_id=1,category_id=1)

    task4 = Task(name="Create Splash Spage",user_id=1,category_id=2)
    task5 = Task(name="Create Logged in NavBar",user_id=1,category_id=2)
    task5 = Task(name="Create Workspace Tab",user_id=1,category_id=2)
    task5 = Task(name="Create Task Board Page",user_id=1,category_id=2)
    task5 = Task(name="Create Redux Store",user_id=1,category_id=2)

    task6 = Task(name="Style Splash Page",user_id=1,category_id=3)
    task7 = Task(name="Style NavBar & Side NavBar",user_id=1,category_id=3)
    task8 = Task(name="Style Task Board Page",user_id=1,category_id=3)
    
    db.session.add(task1)
    db.session.add(task2)
    db.session.add(task3)
    db.session.add(task4)
    db.session.add(task5)
    db.session.add(task6)
    db.session.add(task7)
    db.session.add(task8)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_tasks():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
