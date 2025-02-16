from app.models import db, Artist, environment, SCHEMA
from sqlalchemy.sql import text
from .artist_data import artists


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
            user_id=artist['user_id'],))

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the artists table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_artists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.artists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM artists"))

    db.session.commit()
