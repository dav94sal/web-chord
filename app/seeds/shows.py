from app.models import db, Show, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

# Adds a demo user, you can add other users here if you want
def seed_shows():
    demo = Show(
        artist_id=1, tour_id=1, location="Houston,TX",
        datetime=datetime(2025, 1, 1, 20))
    marnies_show = Show(
        artist_id=2, tour_id=2, location="Houston,TX",
        datetime=datetime(2025, 1, 2, 20))
    bobbies_show = Show(
        artist_id=3, tour_id=3, location="Houston,TX",
        datetime=datetime(2025, 1, 3, 20))


    db.session.add(demo)
    db.session.add(marnies_show)
    db.session.add(bobbies_show)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_shows():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.shows RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM shows"))

    db.session.commit()
