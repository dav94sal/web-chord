from app.models import db, ProfilePic, environment, SCHEMA
from sqlalchemy.sql import text
from .data.profile_pic_data import profile_pics


def seed_profile_pics():
    for i in range(1, len(profile_pics)+1):
        pic = profile_pics[i]
        db.session.add(ProfilePic(
            url=pic["url"],
            user_id=pic['user_id'],))

    db.session.commit()


def undo_profile_pics():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.profile_pics RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM profile_pics"))

    db.session.commit()
