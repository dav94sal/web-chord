import random
from .utils import get_random_datetime
from .comment_data import comments
from .post_data import posts
from.user_data import users


votes = []
all_posts_shuffled = random.sample(posts, len(posts))
all_comments_shuffled = random.sample(comments, len(comments))

for user in users:
    user_id = user["id"]
    user_max_post_votes = len(posts) - (len(posts) // 4)  # 1/4 of posts are not voted on
    user_max_comment_votes = len(comments) - (len(comments) // 3)  # 1/3 of comments are not voted on

    sample_posts = random.sample(all_posts_shuffled, user_max_post_votes)
    sample_comments = random.sample(all_comments_shuffled, user_max_comment_votes)

    for j in range(user_max_post_votes):
        random_datetime = get_random_datetime(sample_posts[j]["created_at"])
        votes.append({
            "id": sample_posts[j]["id"],
            "type": "post",
            "user_id": user_id,
            "vote": random.choice(["upvote", "downvote"]),  # Randomly choose between upvote and downvote
            "created_at": random_datetime,
            "updated_at": random_datetime
        })

    for k in range(user_max_comment_votes):
        random_datetime = get_random_datetime(sample_comments[k]["created_at"])
        votes.append({
            "id": sample_comments[k]["id"],
            "type": "comment",
            "user_id": user_id,
            "vote": random.choice(["upvote", "downvote"]),  # Randomly choose between upvote and downvote
            "created_at": random_datetime,
            "updated_at": random_datetime
        })
