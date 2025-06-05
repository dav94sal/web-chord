import datetime
from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text
from .data.post_data import posts


# Adds demo posts to the database. This function iterates through the
def seed_posts():
    for i in range(len(posts)):
        post = posts[i]
        db.session.add(Post(
            post=post["post"],
            user_id=post["user_id"],
            created_at=datetime.datetime.fromisoformat(post["created_at"]),
            updated_at=datetime.datetime.fromisoformat(post['updated_at'])))

    db.session.commit()


def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))

    db.session.commit()
