from datetime import datetime, timedelta
import random

def get_random_datetime(start_date=datetime(2023, 1, 1), end_date=datetime.now()):
     # Dynamically set to the current time
    time_delta = end_date - start_date
    random_seconds = random.uniform(0, time_delta.total_seconds())

    return start_date + timedelta(seconds=random_seconds)
