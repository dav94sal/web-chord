from app.models import db, Vote, environment, SCHEMA
from sqlalchemy.sql import text
from .data.vote_data import votes


def seed_votes():
    for vote in votes:
        db.session.add(Vote(
            votable_id=vote["votable_id"],
            votable_type=vote["votable_type"],
            user_id=vote["user_id"],
            vote=vote["vote"],
            created_at=vote["created_at"],
            updated_at=vote["updated_at"])
        )

    db.session.commit()


def undo_votes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.votes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM votes"))

    db.session.commit()
