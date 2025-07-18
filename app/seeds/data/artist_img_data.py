from random import choice
from .user_data import users

class ArtistImages:
    def __init__(self):
        self.urls = [
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
            "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Mangled-Digits-Portrait.jpg",
            "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Silhouetted-Woman-black-white.jpg",
            "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/Web-Chord-Speaker.jpg",
            "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-alipazani-2829375.jpg",
            "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-sunpreet-singh-dhanjal-1415777-2775417.jpg",
            "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-bertellifotografia-573299.jpg",
            "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-alipazani-2613260.jpg",
            "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-pixabay-413959.jpg",
            "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-wendywei-1190297.jpg",
            "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/David-Desaturated.jpg",
            
        ]

        self.images = self.images_creator()

    def images_creator(self):
        images = []

        for i in range(len(users)):
            images.append({
                "id": i+1,
                "type": "artist",
                "url": choice(self.urls)
            })
        return images
