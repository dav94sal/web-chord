from app.models import db, Show, environment, SCHEMA
from sqlalchemy.sql import text
from .data.show_data import shows

# Adds a demo user, you can add other users here if you want
def seed_shows():
    for i in range(len(shows)):
        show = shows[i]
        db.session.add(Show(
            tour_id=show["tour_id"],
            artist_id=show['artist_id'],
            city=show["city"],
            state=show["state"],
            venue=show["venue"],
            openers=show["openers"],
            datetime=show['datetime']))

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
