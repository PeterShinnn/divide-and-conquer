from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        full_name='Demo', username='demo', email='demo@aa.io', password='password')
    cameron = User(
        full_name='Cameron W', username='cameroff', email='cameron@aa.io', password='password')
    christy = User(
        full_name='Christy C', username='chrithy', email='christy@aa.io', password='password')
    daniel = User(
        full_name='Daniel L', username='icarium', email='daneil@aa.io', password='password')
    denise = User(
        full_name='Denise L', username='dahneez', email='denise@aa.io', password='password')
    fiona = User(
        full_name='Fiona C', username='fionAHH', email='fionah@aa.io', password='password')
    peter = User(
        full_name='Peter S', username='petur', email='peter@aa.io', password='password')
    thomas = User(
        full_name='Thomas T', username='sirThomas', email='sirthomas@aa.io', password='password')
    yura = User(
        full_name='Yu Ra K', username='yuRa', email='yura@aa.io', password='password')
    jenn = User(
        full_name='Jennifer D', username='jenn', email='jennifer@aa.io', password='password')
    justin = User(
        full_name='Justin S', username='jstnswny', email='justin@aa.io', password='password')
    tanner = User(
        full_name='Tanner S', username='tannertime', email='tanner@aa.io', password='password')
    

    seed1 = User(full_name='Demo1', username='jiFizzle', email='demo2@aa.io', password='password')
    seed2 = User(full_name='Demo2', username='trixR4Chrithy', email='demo3@aa.io', password='password')
    seed3 = User(full_name='Demo3', username='dj-Hurricane', email='demo4@aa.io', password='password')
    seed4 = User(full_name='Demo4', username='laVergneBakery', email='demo5@aa.io', password='password')
    seed5 = User(full_name='Demo5', username='durrGetEMMAWEI', email='demo6@aa.io', password='password')
    
    seed6 = User(full_name='Demo6',username='getOverKnit', email='seed6@aa.io', password='password')
    seed7 = User(full_name='Demo7',username='jENuinely', email='seed7@aa.io', password='password')
    seed8 = User(full_name='Demo8',username='justInTime', email='seed8@aa.io', password='password')
    seed9 = User(full_name='Demo9',username='shawShankRedemption', email='seed9@aa.io', password='password')
    
    db.session.add(demo)
    db.session.add(cameron)
    db.session.add(christy)
    db.session.add(daniel)
    db.session.add(denise)
    db.session.add(fiona)
    db.session.add(peter)
    db.session.add(thomas)
    db.session.add(yura)
    db.session.add(jenn)
    db.session.add(justin)
    db.session.add(tanner)

    db.session.add(seed1)
    db.session.add(seed2)
    db.session.add(seed3)
    db.session.add(seed4)
    db.session.add(seed5)
    db.session.add(seed6)
    db.session.add(seed7)
    db.session.add(seed8)
    db.session.add(seed9)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
