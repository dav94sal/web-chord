from random import choice
from .artist_data import artists

artist_imgs = {
    1: {
        "id": 1,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/web-chord-guitars.jpg"
    },
    2: {
        "id": 2,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Gemini-Generated-Image-rsfaubrsfaubrsfa.png"
    },
    3:{
        "id": 3,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-4.jpg"
    },
    4: {
        "id": 4,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Gemini-Generated-Image-uob3bluob3bluob3.png"
    },
    5:{
        "id": 5,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/8b4580a5-7d42-4e1d-a68a-ef1875d48cb4.jpg"
    },
    6: {
        "id": 6,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Gemini-Generated-Image-22ih8022ih8022ih.png",
    },
    7: {
        "id": 7,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Gemini-Generated-Image-c5mve5c5mve5c5mv.png",
    },
    8: {
        "id": 8,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Gemini-Generated-Image-k61adgk61adgk61a.png",
    },
    9: {
        "id": 9,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/e1059868-19a2-4ca2-90d5-ad1085679df9.jpg",
    },
    10: {
        "id": 10,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/David-Desaturated.jpg"
    },
    11: {
        "id": 11,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Mangled-Digits-Portrait.jpg"
    },
    12: {
        "id": 12,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/melodyMaker-flute1.jpeg",
    },
    13: {
        "id": 13,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/RythmKing.jpeg",
    },
    15: {
        "id": 15,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_dj_male.jpeg",
    },
    17: {
        "id": 17,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_djs.jpeg",
    },
    18: {
        "id": 18,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_drummer_male.jpeg",
    },
    19: {
        "id": 19,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_drummer_female.jpeg",
    },
    21: {
        "id": 21,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_singer_female.jpeg",
    },
    22: {
        "id": 22,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_keys_male.jpeg",
    },
    25: {
        "id": 25,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_dj_female.jpeg",
    },
    30: {
        "id": 30,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_producer_female.jpeg",
    },
    31: {
        "id": 31,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_producer_female2.jpeg",
    },
    32: {
        "id": 32,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/sensei.jpeg",
    },
    36: {
        "id": 36,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_male_bar.jpeg",
    },
    37: {
        "id": 37,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-selfie-3.jpeg",
    },
    41: {
        "id": 41,
        "type": "artist",
        "url": "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/samurai.jpeg",
    },
}


urls = [
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/a-photograph-depicts-two-ethereal-women-_RE3yC8qtSTaeu1M6D8aYSg_FcUr7SQETnKsYor0Dzj-MQ.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Creepy-Unicorn.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/DJ-Dance.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Female-Artist-1.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Female-Artist-2.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Female-Artist-3.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Female-Artist-Pumpkin.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Female-Artist-Sunset.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Group-1.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Hand.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Male-Artist-1.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Male-Artist-Bass.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Male-Artist-Gtr.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Male-Artist-Sax.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Silhouetted-Woman-black-white.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-alipazani-2829375.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-sunpreet-singh-dhanjal-1415777-2775417.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-bertellifotografia-573299.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-alipazani-2613260.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-pixabay-413959.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-wendywei-1190297.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-6.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai-3.jpg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_singers_female.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_female.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_keys_female.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/violinm.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/saxf.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/melodyMaker-flute2.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/trumpetm.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/cellistf.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/raphael-ai_drummer_female2.jpeg",
    "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Web-Chord-Speaker.jpg",
]


for i in range(len(artists)):
    artist_id = artists[i]["id"]
    if artist_id not in artist_imgs:
        artist_imgs[artist_id] = {
            "id": artist_id,
            "type": "artist",
            "url": choice(urls)
        }
