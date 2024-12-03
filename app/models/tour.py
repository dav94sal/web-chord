from .db import db, environment, SCHEMA, add_prefix_for_prod

class Tour(db.Model):
    __tablename__ = "tours"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)

    shows = db.relationship("Show", back_populates="tour")

    def to_dict(self):
        shows = {}
        if self.shows:
            shows = {show.id: show.to_dict() for show in self.shows}
        return {
            "id": self.id,
            "name": self.name,
            "artist_id": self.artist_id,
            "shows": shows
        }
