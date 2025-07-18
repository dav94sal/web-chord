import random
from ..utils import get_random_datetime
from .comment_data import comments
from .post_data import posts
from.user_data import users


votes = []
all_posts_shuffled = random.sample(posts, len(posts))
all_comments_shuffled = random.sample(comments, len(comments))

unique_votes = {}  # Use a dictionary to ensure unique votes

for user in users:
    user_id = user["id"]
    user_max_post_votes = len(posts) - (len(posts) // 4)  # 1/4 of posts are not voted on
    user_max_comment_votes = len(comments) - (len(comments) // 3)  # 1/3 of comments are not voted on

    sample_posts = random.sample(all_posts_shuffled, user_max_post_votes)
    sample_comments = random.sample(all_comments_shuffled, user_max_comment_votes)

    for post_item in sample_posts:
        votable_id = post_item["id"]
        votable_type = "post"
        vote_key = (user_id, votable_id, votable_type) # Define a unique key

        random_datetime = get_random_datetime(post_item["created_at"])
        # Store the vote in the dictionary. If a duplicate key is generated,
        # it will overwrite the previous entry for this user/post, ensuring uniqueness.
        unique_votes[vote_key] = {
            "votable_id": votable_id,
            "votable_type": votable_type,
            "user_id": user_id,
            "vote": random.choice(["upvote", "downvote"]),
            "created_at": random_datetime,
            "updated_at": random_datetime
        }

    for comment_item in sample_comments:
        votable_id = comment_item["id"]
        votable_type = "comment"
        vote_key = (user_id, votable_id, votable_type)

        random_datetime = get_random_datetime(comment_item["created_at"])
        unique_votes[vote_key] = {
            "votable_id": votable_id,
            "votable_type": votable_type,
            "user_id": user_id,
            "vote": random.choice(["upvote", "downvote"]),
            "created_at": random_datetime,
            "updated_at": random_datetime
        }

# Convert the dictionary values (the unique vote entries) back to a list
votes = list(unique_votes.values())
