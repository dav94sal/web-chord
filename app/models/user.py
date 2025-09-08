from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
# from .image import Image


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    is_artist = db.Column(db.Boolean)

    artist = db.relationship("Artist", cascade="all, delete-orphan")
    profile_pic = db.relationship("ProfilePic", backref="user", uselist=False, cascade="all, delete-orphan")
    posts = db.relationship("Post", backref='author', lazy=True, cascade="all, delete-orphan")
    comments = db.relationship("Comment", backref='author', lazy=True, cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def safe_to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'profile_pic_url': self.profile_pic.to_dict()["url"] if self.profile_pic else None,
            'artist_id': self.artist[0].to_dict()["id"] if self.artist else None,
        }
