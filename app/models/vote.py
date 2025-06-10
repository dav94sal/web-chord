from .db import db, environment, SCHEMA, add_prefix_for_prod
# from app.models import User, Merch
from sqlalchemy.dialects.postgresql import ENUM


class Vote(db.Model):
    """Define columns that will be present in each
    'Vote' table.

    """

    __tablename__ = "votes"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    votable_id = db.Column(db.Integer, nullable=False)
    votable_type = db.Column(ENUM('post', 'comment', name='votable_types'), nullable=False)
    user_id = db.Column(db.Integer, nullable=False)
    vote = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now(), nullable=False)

    __table_args__ = (
        db.UniqueConstraint('votable_id', 'votable_type', 'user_id', name='unique_vote_per_user'),
    )

    def to_dict(self):
        return {
            "id": self.id,
            "votable_type": self.votable_type,
            "votable_id": self.votable_id,
            "user_id": self.user_id,
            "vote": self.vote,
            "created_at": self.created_at,
            "updated_at": self.updated_at,}
