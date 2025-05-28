from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship

class ProfilePic(db.Model):
    """Model for user profile pictures."""
    __tablename__ = 'profile_pics'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False, unique=True)
    """Foreign key to the User model, ensuring each user has one profile picture."""

    # user = relationship("User")

    def to_dict(self):
        """Converts the ProfilePic instance to a dictionary."""
        return {
            "id": self.id,
            "url": self.url,
            "user_id": self.user_id,
            # "user": self.user.to_dict() if self.user else None
        }
