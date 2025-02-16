from .db import db, environment, SCHEMA, add_prefix_for_prod

class Artist(db.Model):
    __tablename__ = 'artists'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    artist_name = db.Column(db.String(40), nullable=False)
    x_url = db.Column(db.String)
    facebook_url = db.Column(db.String)
    instagram_url = db.Column(db.String)
    youtube_url = db.Column(db.String)
    spotify_url = db.Column(db.String)
    pandora_url = db.Column(db.String)
    ticket_url = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)

    img = db.relationship(
        "Image",
        primaryjoin="and_(Image.imageable_type=='artist', foreign(Image.imageable_id)==Artist.id)",
        lazy="dynamic",
    )
    user = db.relationship("User")
    tour = db.relationship("Tour", cascade="all, delete-orphan")
    merch = db.relationship("Merch", cascade="all, delete-orphan")

    def to_dict(self):
        url = None
        # print("-----------images", self.img)
        if len(list(self.img)):
            url = list(self.img)[0].url
        return {
            'id': self.id,
            'artistName': self.artist_name,
            'imgUrl': url,
            'x_url': self.x_url or "",
            'facebook_url': self.facebook_url or "",
            'instagram_url': self.instagram_url or "",
            'youtube_url': self.youtube_url or "",
            'spotify_url': self.spotify_url or "",
            'pandora_url': self.pandora_url or "",
            'ticket_url': self.ticket_url or "",
            'user_id': self.user_id,
        }
