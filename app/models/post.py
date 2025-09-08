from .db import db, environment, SCHEMA, add_prefix_for_prod
from .vote import Vote


class Post(db.Model):
    __tablename__ = "posts"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    post = db.Column(db.String(400), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now(), nullable=False)

    # comments = db.relationship("Comment", backref='post', lazy=True, cascade="all, delete-orphan")
    # votes = db.relationship(
    #     "Vote",
    #     primaryjoin="and_(Vote.votable_type=='post', foreign(Vote.votable_id)==Post.id)",
    #     lazy="dynamic",
    # )

    def get_vote_count(self):
        # print("self.votes: ", list(self.votes))
        upvotes = self.votes.filter(Vote.vote == 'upvote').count()
        downvotes = self.votes.filter(Vote.vote == 'downvote').count()

        # print("upvotes, downvotes: ", upvotes, downvotes)
        return {"upvotes": upvotes, "downvotes": downvotes, "total": upvotes - downvotes}

    def to_dict(self, calculated_upvotes=None, calculated_downvotes=None, calculated_total_votes=None):
        if calculated_upvotes is not None and calculated_downvotes is not None and calculated_total_votes is not None:
            # Use the calculated values from the main query if provided
            upvotes = calculated_upvotes
            downvotes = calculated_downvotes
            total = calculated_total_votes
        else:
            upvotes, downvotes, total = self.get_vote_count().values()

        return {
            "id": self.id,
            "post": self.post,
            "upvotes": upvotes,
            "downvotes": downvotes,
            "totalvotes": total,
            "user_id": self.user_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "author": self.author.safe_to_dict() if self.author else None,
            # "comments": {comment.id:comment.to_dict() for comment in self.comments},
        }
