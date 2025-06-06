import datetime
from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text
from .data.comment_data import comments

# Adds demo comments to the database. This function iterates through the
def seed_comments():
    for i in range(len(comments)):
        comment = comments[i]
        db.session.add(Comment(
            comment=comment["comment"],
            user_id=comment["user_id"],
            post_id=comment["post_id"],
            created_at=comment["created_at"],
            updated_at=comment['updated_at']))

    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
