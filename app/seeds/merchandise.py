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

def undo_merchandise():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.merchandise RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM merchandise"))

    db.session.commit()
