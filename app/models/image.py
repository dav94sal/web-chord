from .db import db, environment, SCHEMA, add_prefix_for_prod
# from app.models import User, Merch
from sqlalchemy.dialects.postgresql import ENUM

class Image(db.Model):
    """Define columns that will be present in each
    'Image' table.

    """

    __tablename__ = "images"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    imageable_type = db.Column(ENUM('artist', 'merch', name='imageable_types'), nullable=False)
    imageable_id = db.Column(db.Integer, nullable=False)
    url = db.Column(db.String, nullable=False)

    # def __repr__(self):
    #     return f"{self.__class__.__name__}({self.name!r})"

    def to_dict(self):
        return {
            "id": self.id,
            "imageable_type": self.imageable_type,
            "imageable_id": self.imageable_id,
            "url": self.url,
        }
