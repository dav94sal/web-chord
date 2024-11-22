from .db import db, environment, SCHEMA, add_prefix_for_prod

class Show(db.Model):
    __tablename__ = "shows"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    datetime = db.Column(db.DateTime, nullable=False)
    location = db.Column(db.String, nullable=False)
    tour_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("tours.id")), nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)