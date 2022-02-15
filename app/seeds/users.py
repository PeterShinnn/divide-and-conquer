from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        full_name='Demo', username='Demo', email='demo@aa.io', password='password')
    peter = User(
        full_name='Peter S', username='Peter S', email='peter@aa.io', password='password')
    thomas = User(
        full_name='Thomas T', username='Sir Thomas', email='sirthomas@aa.io', password='password')

    db.session.add(demo)
    db.session.add(peter)
    db.session.add(thomas)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
