from .db import db, environment, SCHEMA, add_prefix_for_prod


class Comment(db.Model):
    __tablename__ = "comments"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(400), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("posts.id")), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now(), nullable=False)

    __table_args__ = (
        db.UniqueConstraint('user_id', 'post_id', name='unique_comment_per_user_per_post'),
    )

    def to_dict(self):
        return {
            "id": self.id,
            "comment": self.comment,
            # "upvotes": self.upvotes,
            # "downvotes": self.downvotes,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "author": self.author.to_dict() if self.author else None,
            "post": self.post.to_dict() if self.post else None,
        }
