from random import choice
from .user_data import users

profile_pics = {
    1: {
        "id": 1,
        "url": "https://i.ibb.co/QCpy2j4/5316e773-22be-4d88-90c2-802354423ca7.jpg",
        "user_id": 1,
    },
    2: {
        "id": 2,
        "url": "https://i.ibb.co/yCgNy92/Gemini-Generated-Image-rsfaubrsfaubrsfa.png",
        "user_id": 2,
    },
    3: {
        "id": 3,
        "url": "https://i.ibb.co/hxQH8J8n/raphael-ai-4.jpg",
        "user_id": 3,
    },
    4: {
        "id": 4,
        "url": "https://i.ibb.co/b8yzNKp/raphael-ai-6.jpg",
        "user_id": 4,
    },
    5: {
        "id": 5,
        "url": "https://i.ibb.co/sdD2pdBN/raphael-ai-3.jpg",
        "user_id": 5,
    },
    6: {
        "id": 6,
        "url": "https://i.ibb.co/5CHXhHn/Gemini-Generated-Image-uob3bluob3bluob3.png",
        "user_id": 6,
    },
    7: {
        "id": 7,
        "url": "https://i.ibb.co/sVBFDBy/8b4580a5-7d42-4e1d-a68a-ef1875d48cb4.jpg",
        "user_id": 7,
    },
    8: {
        "id": 8,
        "url": "https://i.ibb.co/yPLxrwM/f5b9421f-8a5e-4f44-939d-33980c3e217c.jpg",
        "user_id": 8,
    },
    9: {
        "id": 9,
        "url": "https://i.ibb.co/R47HhPXb/Gemini-Generated-Image-22ih8022ih8022ih.png",
        "user_id": 9,
    },
    10: {
        "id": 10,
        "url": "https://i.ibb.co/B1jQ0wY/Gemini-Generated-Image-c5mve5c5mve5c5mv.png",
        "user_id": 10,
    },
    11: {
        "id": 11,
        "url": "https://i.ibb.co/WN6HwzwW/Gemini-Generated-Image-k61adgk61adgk61a.png",
        "user_id": 11,
    },
    12: {
        "id": 12,
        "url": "https://i.ibb.co/TWH5cQJ/e1059868-19a2-4ca2-90d5-ad1085679df9.jpg",
        "user_id": 12,
    },
    13: {
        "id": 13,
        "url": "https://i.ibb.co/m81FPrZ/David-Desaturated-edited.jpg",
        "user_id": 13,
    },
    14: {
        "id": 14,
        "url": "https://i.ibb.co/6HNB1b2/Mangled-Digits-Portrait.jpg",
        "user_id": 14,
    },
    15: {
        "id": 15,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/melodyMaker-flute1.jpeg",
        "user_id": 15,
    },
    16: {
        "id": 16,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/RythmKing.jpeg",
        "user_id": 16,
    },
    18: {
        "id": 18,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_dj_male.jpeg",
        "user_id": 18,
    },
    20: {
        "id": 20,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_djs.jpeg",
        "user_id": 20,
    },
    21: {
        "id": 21,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_drummer_male.jpeg",
        "user_id": 21,
    },
    22: {
        "id": 22,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_drummer_female.jpeg",
        "user_id": 22,
    },
    24: {
        "id": 24,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_singer_female.jpeg",
        "user_id": 24,
    },
    25: {
        "id": 25,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_keys_male.jpeg",
        "user_id": 25,
    },
    28: {
        "id": 28,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_dj_female.jpeg",
        "user_id": 28,
    },
    33: {
        "id": 33,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_producer_female.jpeg",
        "user_id": 33,
    },
    34: {
        "id": 34,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_producer_female2.jpeg",
        "user_id": 34,
    },
    35: {
        "id": 35,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/sensei.jpeg",
        "user_id": 35,
    },
    39: {
        "id": 39,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_male_bar.jpeg",
        "user_id": 39,
    },
    40: {
        "id": 40,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-selfie-3.jpeg",
        "user_id": 40,
    },
    44: {
        "id": 44,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/samurai.jpeg",
        "user_id": 44,
    },
    46: {
        "id": 46,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_singers_female.jpeg",
        "user_id": 46,
    },
    70: {
        "id": 70,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_female.jpeg",
        "user_id": 70,
    },
    71: {
        "id": 71,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_keys_female.jpeg",
        "user_id": 71,
    },
    72: {
        "id": 72,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_drummer_female2.jpeg",
        "user_id": 72,
    },
    73: {
        "id": 73,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/cellistf.jpeg",
        "user_id": 73,
    },
    74: {
        "id": 74,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/trumpetm.jpeg",
        "user_id": 74,
    },
    75: {
        "id": 75,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/melodyMaker-flute2.jpeg",
        "user_id": 75,
    },
    76: {
        "id": 76,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/saxf.jpeg",
        "user_id": 76,
    },
    77: {
        "id": 77,
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/violinm.jpeg",
        "user_id": 77,
    },
}


pool = [
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_singers_male.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-band-2.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-band-3.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-band-4.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-band-5.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-band-6.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-band-7.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-selfie-2.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-selfie-botched.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-selfie.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_group_female.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_group_male.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_male.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_male_w_background.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_group.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_group2.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_group_female2.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_group_male2.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_female_bar.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_female_bar2.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_producer_male.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/cellistf2.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/saxm.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/violinf.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_fan1m.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_fan2f.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_metal1m.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_metal2f.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-goth-girl.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-reggae1f.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-reggae2m.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-anime-girl.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-band-1.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_bassist_female.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_bassist_male.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_singer_male.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_singers_male.jpeg",
]


for i in range(len(users)):
    user_id = users[i]['id']
    if user_id not in profile_pics:
        profile_pics[user_id] = {
            "id": user_id,
            "url": choice(pool),
            "user_id": user_id,
        }
