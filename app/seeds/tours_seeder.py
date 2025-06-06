from app.models import db, Tour, environment, SCHEMA
from sqlalchemy.sql import text
from .data.tour_data import tours
from datetime import datetime

# Adds demo tours
def seed_tours():
    for i in range(len(tours)):
        tour = tours[i]
        db.session.add(Tour(
            name=tour["name"],
            artist_id=tour["artist_id"],
            created_at=tour["created_at"],
            updated_at=tour['updated_at']))

    db.session.commit()


def undo_tours():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.tours RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM tours"))

    db.session.commit()
