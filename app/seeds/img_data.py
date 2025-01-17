from random import shuffle
from .user_data import users

class UserImages:
    def __init__(self):
        self.urls = ["https://i.ibb.co/yPLxrwM/f5b9421f-8a5e-4f44-939d-33980c3e217c.jpg",
                     "https://i.ibb.co/JC21pfy/c7425f23-a16a-43a7-a1fa-7f573b33b5b5.jpg",
                "https://i.ibb.co/7pc1V4X/pexels-emilygarland-1499327.jpg",
                "https://i.ibb.co/m5HmbNB/pexels-elina-araja-1743227-3343253.jpg",
                "https://i.ibb.co/BLtzcgF/pexels-cottonbro-5435192.jpg",
                "https://i.ibb.co/Mk6Z0Sz/pexels-clam-lo-1782448-3469692.jpg",
                "https://i.ibb.co/Bsfjcnf/pexels-brunocervera-1194806.jpg",
                "https://i.ibb.co/KspyTmD/pexels-asim-razan-343717.jpg",
                "https://i.ibb.co/TWH5cQJ/e1059868-19a2-4ca2-90d5-ad1085679df9.jpg",
                "https://i.ibb.co/sVBFDBy/8b4580a5-7d42-4e1d-a68a-ef1875d48cb4.jpg",
                "https://i.ibb.co/s9XXMm7/pexels-yasart-jpg-706180077-29482191.jpg",
                "https://i.ibb.co/YQWRCq3/pexels-victorfreitas-733767.jpg",
                "https://i.ibb.co/8cZq9G4/pexels-mediocrememories-2240771.jpg",
                "https://i.ibb.co/8x83P55/pexels-laura-villela-brasil-438615876-27498180.jpg",
                "https://i.ibb.co/r0KD63k/pexels-marcelodias-2460227.jpg",
                "https://i.ibb.co/DQsLWwH/pexels-hardeep-18557772.jpg",
                "https://i.ibb.co/LvsCp8W/pexels-keynotez-12293191.jpg"]

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
