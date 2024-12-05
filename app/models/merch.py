from .db import db, environment, SCHEMA, add_prefix_for_prod

class Merch(db.Model):
    __tablename__ = "merchandise"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    price = db.Column(db.Float(5, 2), nullable=False)
    url = db.Column(db.String)
    artist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "url": self.url,
            "artist_id": self.artist_id,
        }
