from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
from .data.user_data import users


def seed_users():
    for i in range(len(users)):
        user = users[i]
        db.session.add(User(
            username=user["username"],
            email=user['email'],
            password=user['password'],
            is_artist=user['is_artist'],))

    db.session.commit()


def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
