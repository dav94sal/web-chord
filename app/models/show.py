from .db import db, environment, SCHEMA, add_prefix_for_prod

class Show(db.Model):
    __tablename__ = "shows"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    datetime = db.Column(db.DateTime, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    venue = db.Column(db.String, nullable=False)
    headliners = db.Column(db.String)
    tour_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("tours.id")), nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)

    tour = db.relationship("Tour", back_populates="shows")

    def to_dict(self):
        return {
            "id": self.id,
            "datetime": self.datetime,
            "city": self.city,
            "state": self.state,
            "venue": self.venue,
            "headliners": self.headliners,
            "tour_id": self.tour_id,
            "artist_id": self.artist_id,
        }
