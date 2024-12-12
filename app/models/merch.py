from .db import db, environment, SCHEMA, add_prefix_for_prod
# from .image import Image

class Merch(db.Model):
    __tablename__ = "merchandise"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    price = db.Column(db.Float(5, 2), nullable=False)
    url = db.Column(db.String)
    artist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)

    # __mapper_args__ = {
    #     "polymorphic_identity": "artist",
    # }

    img = db.relationship(
        "Image",
        primaryjoin="and_(Image.imageable_type=='merch', foreign(Image.imageable_id)==Merch.id)",
        lazy="dynamic",
    )

    def to_dict(self):
        url = None
        # print("-----------images", type(self.img))
        if len(list(self.img)):
            url = list(self.img)[0].url
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "url": self.url,
            "artist_id": self.artist_id,
            "imgUrl": url
        }
