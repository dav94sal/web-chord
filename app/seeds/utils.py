from datetime import datetime, timedelta
import random

def get_random_datetime(start_date=datetime(2023, 1, 1), end_date=datetime.now()):
     # Dynamically set to the current time
    time_delta = end_date - start_date
    random_seconds = random.uniform(0, time_delta.total_seconds())

    return start_date + timedelta(seconds=random_seconds)


def getUniqueUserId(post_id, num_users, used_ids=set()):
    """Generate a unique user ID for the comment based on the post ID."""

    ids = [i for i in range(1, num_users + 1)]  # User IDs from 1 to num_users
    random.shuffle(ids)

    for i in range(len(ids)):
        user_id = ids[i]
        if (user_id, post_id) not in used_ids:
            used_ids.add((user_id, post_id))
            return [user_id, used_ids]
    return False  # If no unique ID can be found, return False
