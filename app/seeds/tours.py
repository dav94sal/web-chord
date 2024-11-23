from app.models import db, Tour, environment, SCHEMA
from sqlalchemy.sql import text
from .tour_data import tours

# Adds a demo user, you can add other users here if you want
def seed_tours():
    for i in range(len(tours)):
        tour = tours[i]
        Tour(name='Demo Tour', artist_id=1)
        db.session.add(Tour(
            name=tour["name"],
            artist_id=tour['artist_id']))

    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_tours():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.tours RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM tours"))

    db.session.commit()
