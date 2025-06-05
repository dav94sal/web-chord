from .db import db, environment, SCHEMA, add_prefix_for_prod


class Post(db.Model):
    __tablename__ = "posts"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    post = db.Column(db.String(400), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now(), nullable=False)

    comments = db.relationship("Comment", backref='post', lazy=True, cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "post": self.post,
            # "upvotes": self.upvotes,
            # "downvotes": self.downvotes,
            "user_id": self.user_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "author": self.author.to_dict() if self.author else None,
            "comments": {comment.id:comment.to_dict() for comment in self.comments},
        }
