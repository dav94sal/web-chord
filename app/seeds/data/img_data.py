from random import shuffle
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
        ]

        self.images = self.images_creator()

    def images_creator(self):
        images = []
        idx = [i for i in range(len(self.urls))]
        shuffle(idx)

        for i in range(len(users)):
            num = idx[i]
            images.append({
                "id": i+1,
                "type": "artist",
                "url": self.urls[num]
            })
        return images
