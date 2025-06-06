import random
from datetime import datetime
from .utils import get_random_datetime
from .user_data import users
from .post_data import posts


NUMBER_OF_POSTS = len(posts)
MAX_USER_ID = len(users)

comments = []
comment_id_counter = 1

# Expanded list of 365 general positive/engagement comments
general_comments = [
    "Absolutely fantastic!", "Love your work!", "So inspiring!", "Couldn't agree more!", "This is phenomenal!",
    "Great perspective!", "Spot on as always!", "Totally resonated with me!", "You made my day!", "Keep pushing forward!",
    "Simply amazing!", "You've truly captured it!", "Deeply inspiring!", "So incredibly relatable!", "Yes, exactly this!",
    "This is pure brilliance!", "Much needed wisdom!", "Thanks for sharing your journey!", "Eloquently put!", "Without a doubt!",
    "You're a legend!", "So, so good!", "Always learning from your insights!", "Makes perfect sense to me.", "Flawless!",
    "This hit different today!", "Absolutely spot-on!", "Pure gold in this post!", "Loving the energy!", "Such a powerful message!",
    "Incredibly creative!", "Huge fan here!", "You're truly gifted!", "Mind officially blown!", "This spoke to my soul.",
    "What a truly great post!", "Precisely!", "Very captivating!", "Couldn't toast to it more!", "I'll be thinking about this.",
    "Brilliant as ever!", "What a true gem!", "So utterly inspiring!", "Couldn't have articulated it better myself.", "This is THE one!",
    "More of this, please!", "You've got my full attention!", "Solid, rock-solid content!", "Super incredibly helpful!", "Such true words!",
    "Exactly what I was thinking!", "You're absolutely crushing it!", "Adore your perspective!", "Feeling this deeply!", "Always grateful for your posts.",
    "This sounds out of this world!", "Can't wait to blast this!", "What an incredible performance!", "Such a beautiful instrument!",
    "Totally agree on this point!", "My exact thoughts!", "Keep on rocking, literally!", "Stay wonderfully creative!", "What awesome talent!",
    "Where can I find this track?", "You inspire my own music!", "Dream setup right here, seriously!", "Practice truly does make perfect!",
    "So much truth packed into this!", "Sending nothing but good vibes!", "Rock solid!", "Jazz hands all the way!", "Lost in synth heaven!",
    "Drums are the heartbeat of music!", "Vocals are absolutely perfect!", "Guitar legend in the making!", "Bass lines that groove!", "Piano magic unleashed!",
    "A true musical visionary!", "Truly captivating melodies!", "Can definitely relate to this feeling!", "Goosebumps every time!", "Pure, unadulterated talent!",
    "This is precisely what music is all about!", "So incredibly excited for this!", "What a show!", "Incredible sound design!",
    "Learning so much from your artistry!", "Keep the incredible music coming!", "You're an absolute star!", "Fantastic rhythm section!",
    "So much soul poured into this!", "Loving the undeniable passion!", "This just makes me want to pick up an instrument!", "Absolutely breathtaking!",
    "What a lush soundscape!", "Truly unique auditory experience!", "The best way to just chill out!", "Couldn't ask for better tunes!",
    "This just hits differently, in the best way!", "Timeless classic in the making!", "Future legend!", "Vibes are absolutely immaculate!",
    "Pure auditory bliss, thank you!", "Melody perfection achieved!", "Harmony goals reached!", "Riff central, love it!", "Solo dreams come true!",
    "This is gold for anyone learning!", "Such dedication!", "Totally feeling the energy here!", "Keep sharing your journey!", "Mind-blowing skills!",
    "This is the kind of content I live for!", "What a gem of a post!", "So much truth!", "Absolutely brilliant insights!", "You inspire me to practice!",
    "The passion is palpable!", "This needs to be heard!", "You're a true artist!", "Epic!", "Just incredible!",
    "What a great way to put it!", "So insightful!", "Love the way you express this.", "Couldn't be more accurate!", "Fantastic message!",
    "This is why I follow you!", "Your work is consistently amazing.", "Pure genius!", "Feeling motivated after reading this.", "Thank you for the inspiration!",
    "Exactly what I needed to hear.", "Such a powerful voice!", "This resonates deeply.", "Bravo!", "Simply divine!",
    "What an achievement!", "So impressive!", "The dedication shines through.", "Keep shining!", "A true master!",
    "This brightened my day!", "Couldn't stop reading/listening!", "So much wisdom.", "An absolute pleasure to experience.", "Chapeau!",
    "You set the bar high!", "This is next level!", "Beyond words!", "A masterpiece!", "Seriously good stuff!",
    "This is the real deal!", "What a journey!", "So proud of you!", "Keep making magic!", "Forever grateful for your art.",
    "This made me smile!", "So heartwarming!", "The talent is undeniable.", "Pure joy!", "Absolutely perfect!",
    "What an uplifting post!", "This gives me hope!", "So much positive energy!", "You're a beacon!", "Shine on!",
    "This is art in its purest form.", "Mesmerizing!", "Captivating!", "Unforgettable!", "Simply stunning!",
    "What a fantastic contribution!", "Adding so much value!", "Thank you for your generosity!", "Sharing is caring, and you care a lot!",
    "This is a game-changer!", "Revolutionary!", "Breaking new ground!", "Ahead of the curve!", "Visionary!",
    "A true inspiration to us all.", "You push boundaries!", "So much courage in your work.", "Fearless!", "Bold and brilliant!",
    "This is a must-see/hear!", "Highly recommend this!", "Don't miss this one!", "Worth every second!", "A true standout!",
    "What an incredible journey you're on.", "Following your path with admiration.", "So much to learn from you.", "Forever a student of your craft.",
    "This is the future of music/art!", "Setting new trends!", "Innovator!", "Trailblazer!", "Pioneer!",
    "What a wonderful surprise!", "Unexpected delight!", "Simply charming!", "A true pleasure!", "Delightful!",
    "This made me laugh!", "So witty!", "Hilarious!", "A breath of fresh air!", "You're so funny!",
    "What a thoughtful post!", "Deeply appreciative of your insights.", "So much to ponder.", "Thank you for the reflection.",
    "This is a masterpiece of storytelling.", "So immersive!", "You paint with words/sounds!", "A true narrator!",
    "What a powerful message!", "It needed to be said!", "Thank you for your bravery!", "Speaking truth to power!",
    "This is a game-changer for my practice!", "So practical and useful!", "Applying this immediately!", "Thanks for the actionable advice!",
    "What a harmonious blend!", "Perfectly balanced!", "The synergy is amazing!", "Working together beautifully!",
    "This is the kind of quality content I subscribe for!", "Always delivering!", "You consistently impress me!", "Reliably excellent!",
    "What an exciting development!", "Eagerly awaiting more!", "The anticipation is real!", "Building something special here!",
    "This is pure auditory genius!", "A treat for the ears!", "Melodic brilliance!", "Rhythmic perfection!", "Sonic bliss!",
    "What a rich tapestry of sound!", "Layered and intricate!", "So much depth!", "Complex yet beautiful!",
    "This captures the essence of what you do.", "The heart and soul are evident.", "Authentic and real!", "Truly from the core!",
    "What an emotional journey!", "Moved to tears/joy!", "Felt every note/word!", "A truly moving experience!",
    "This is going straight into my playlist!", "On repeat!", "New favorite!", "Can't stop listening!",
    "What an incredible dedication to your craft!", "The effort clearly pays off!", "Inspiring work ethic!", "Truly committed!",
    "This is why you're at the top!", "Setting standards!", "Leading the way!", "A true leader!",
    "What a beautiful composition!", "So well structured!", "Every element in its place!", "A perfect symphony!",
    "This is going to be HUGE!", "Mark my words!", "Forecasting success!", "Future icon!",
    "What an awesome collaboration!", "The chemistry is undeniable!", "Together you're unstoppable!", "More collabs please!",
    "This really speaks to the musician in me.", "Understanding the struggle/joy!", "Relatable on another level!",
    "What an insightful analysis!", "Breaking it down perfectly!", "Clarifying the complex!", "Making it easy to understand!",
    "This is the perfect blend of raw talent and polished skill.", "Naturally gifted, expertly refined!",
    "What a unique sound you've cultivated!", "No one else sounds like this!", "Truly original!", "A breath of fresh air for my ears!",
    "This reminds me why I love music.", "Reignited my passion!", "The spark is back!", "Feeling the magic again!",
    "What an adventure in sound!", "Taking me on a journey!", "Exploring new sonic landscapes!", "So immersive!",
    "This deserves all the awards!", "Award-worthy content!", "Seriously outstanding!", "Masterclass!",
    "What a phenomenal vocal performance!", "The voice is an instrument!", "So much control and emotion!",
    "This brings so much joy to my day!", "A ray of sunshine!", "Instant mood booster!", "Thank you for the happiness!",
    "What a powerful drum beat!", "Driving rhythm!", "The backbone of the track!", "So impactful!",
    "This is a masterclass in guitar playing!", "Fingers of fire!", "Unbelievable shredding!", "Pure guitar wizardry!",
    "What an incredible bassline!", "Groovy beyond words!", "Holding it all together!", "The low end is pure perfection!",
    "This piano piece is hauntingly beautiful.", "So expressive!", "Every note tells a story!", "A true emotional journey!",
    "What an atmospheric synth sound!", "Creating whole new worlds!", "So immersive and deep!", "Pure electronic bliss!",
    "This is a must-hear for any music lover!", "Essential listening!", "Highly recommended!", "Don't walk, run to hear this!",
    "What an energetic performance!", "The stage presence is electric!", "Bringing the house down!", "Full of life!",
    "This captures the raw essence of live music.", "Authentic and real!", "You can feel the moment!",
    "What a brilliant use of effects!", "Adding so much texture!", "Creative sound design!", "Pushing boundaries!",
    "This song is going to be my new anthem!", "On loop forever!", "Catchy beyond belief!", "Stuck in my head in the best way!",
    "What a powerful message in the lyrics!", "So profound!", "Makes you think!", "Deep and meaningful!",
    "This is the kind of music that stands the test of time.", "Classic in the making!", "Timeless appeal!",
    "What an impressive vocal range!", "Hitting those notes perfectly!", "Effortless power!",
    "This is going to inspire so many people!", "A true inspiration!", "Making a difference!",
    "What a unique melodic approach!", "So fresh and new!", "Innovative!", "Breaking the mold!",
    "This is an absolute treat for the ears!", "Rich and full sound!", "Crystal clear production!",
    "What an incredible instrumental!", "So much talent on display!", "Every instrument shines!",
    "This is perfect for my chill playlist!", "Relaxing vibes!", "So soothing!", "Pure auditory comfort!",
    "What a powerful and emotive performance!", "You can feel the emotion!", "Raw and real!",
    "This track just transports me!", "Escapism at its best!", "Lost in the music!",
    "What an intricate arrangement!", "So many layers to discover!", "Brilliantly put together!",
    "This is exactly what I needed today!", "A musical pick-me-up!", "Right on time!",
    "What a fantastic blend of genres!", "Seamless fusion!", "Breaking barriers!",
    "This is going to be a classic, I can feel it!", "A future legend!", "Guaranteed hit!",
    "What an engaging live show!", "The audience connection is palpable!", "So much fun!",
    "This is why I love independent music!", "Raw talent, pure passion!", "Supporting the underground!",
    "What a surprising and delightful discovery!", "Pleasantly surprised!", "New favorite artist!",
    "This track is pure fire!", "Heating up the charts!", "Burning hot!", "Blazing!"
]


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


for i in range(len(posts)):
    post = posts[i]
    post_id = 1 # Default post_id in case the post does not exist
    num_users = len(users)
    num_comments_for_post = random.randint(num_users - (num_users // 4), num_users)

    if post:
        # If the post exists, use its ID
        post_id = post["id"]

    used_ids = set()  # Reset used IDs for each post

    for _ in range(num_comments_for_post):
        res = getUniqueUserId(post_id, num_users, used_ids)

        if res:
            user_id, new_used_ids = res
            used_ids = new_used_ids
            random_datetime = get_random_datetime(post["created_at"])
            comments.append({
                "id": comment_id_counter,
                "comment": random.choice(general_comments), # Randomly pick a general comment
                "user_id": user_id,
                "post_id": post_id,
                "created_at": random_datetime,
                "updated_at": random_datetime,
            })
            comment_id_counter += 1
        else:
            break  # If no unique user ID can be found, break out of the loop
