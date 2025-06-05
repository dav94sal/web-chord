from app.models import db, Artist, environment, SCHEMA
from sqlalchemy.sql import text
from .data.artist_data import artists


def seed_artists():
    for i in range(len(artists)):
        artist = artists[i]
        db.session.add(Artist(
            artist_name=artist['artist_name'],
            x_url="https://x.com/?lang=en",
            facebook_url="https://www.facebook.com/",
            instagram_url="http://instagram.com/",
            youtube_url="https://www.youtube.com/",
            spotify_url="https://open.spotify.com/",
            pandora_url="https://www.pandora.com/",
            ticket_url="https://www.ticketmaster.com/",
            user_id=artist['user_id'],
            created_at=artist['created_at'],
            updated_at=artist['updated_at'],))

    db.session.commit()


def undo_artists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.artists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM artists"))

    db.session.commit()
