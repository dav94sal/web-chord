from app.models import db, Merch, environment, SCHEMA
from sqlalchemy.sql import text
from .data.merch_data import merchandise

# Adds demo merch
def seed_merchandise():
    for i in range(len(merchandise)):
        merch = merchandise[i]
        db.session.add(Merch(
            name=merch["name"],
            price=merch["price"],
            url=merch["url"],
            artist_id=merch['artist_id']))

    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_merchandise():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.merchandise RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM merchandise"))

    db.session.commit()
