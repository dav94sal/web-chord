from .db import db, environment, SCHEMA, add_prefix_for_prod

class Image(db.Model):
    __tablename__ = "images"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    imageable_type = db.Column(db.String, nullable=False)
    imageable_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id") or
        add_prefix_for_prod("merchandise.id")), nullable=False)
    url = db.Column(db.String, nullable=False)

    ids = db.relationship("User", back_populates="img")
