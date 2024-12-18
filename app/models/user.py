from .db import db, environment, SCHEMA, Base, add_prefix_for_prod
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
    artist_name = db.Column(db.String(40))

    # __mapper_args__ = {
    #     "polymorphic_identity": "artist",
    # }

    img = db.relationship(
        "Image",
        primaryjoin="and_(Image.imageable_type=='artist', foreign(Image.imageable_id)==User.id)",
        lazy="dynamic",
    )
    tour = db.relationship("Tour", cascade="all, delete-orphan")
    merch = db.relationship("Merch", cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

    def artist(self):
        url = None
        # print("-----------images", self.img)
        if len(list(self.img)):
            url = list(self.img)[0].url
        return {
            'id': self.id,
            'artistName': self.artist_name,
            'imgUrl': url
        }
