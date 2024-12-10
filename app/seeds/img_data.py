from random import shuffle
from .user_data import users

class UserImages:
    def __init__(self):
        self.urls = ["https://i.ibb.co/yPLxrwM/f5b9421f-8a5e-4f44-939d-33980c3e217c.jpg",
                     "https://i.ibb.co/JC21pfy/c7425f23-a16a-43a7-a1fa-7f573b33b5b5.jpg",
                "https://i.ibb.co/6HNQ0mn/b0b46fd0-191f-43b4-8ec9-38a9be2f0ac2.jpg",
                "https://i.ibb.co/F7vmGbV/a8baf158-f5a1-4dae-84fa-c59c841c310b.jpg",
                "https://i.ibb.co/WxXqxMn/a4b13bdb-9ecd-4a60-ab1f-539264d42042.jpg",
                "https://i.ibb.co/YQHby7D/41426379-2f16-4fdc-b840-7b61efbb9e61.jpg",
                "https://i.ibb.co/pvvjv33/19665314-17ab-4197-b586-bdd5b9799ce7.jpg",
                "https://i.ibb.co/4MNfJr0/87257b2d-e33d-4568-82e6-f52ad416c9da.jpg",
                "https://i.ibb.co/QCpy2j4/5316e773-22be-4d88-90c2-802354423ca7.jpg",
                "https://i.ibb.co/yh0Zv5M/705dbc92-a5ad-4d34-a0b6-2f92981036d1.jpg",
                "https://i.ibb.co/d2JPvgJ/0022df6b-143a-4d3a-ace2-ad627c82c929.jpg",
                "https://i.ibb.co/x7brz3P/606f2429-1374-4355-b653-e95c7ecb40ed.jpg",
                "https://i.ibb.co/7pc1V4X/pexels-emilygarland-1499327.jpg",
                "https://i.ibb.co/zmr3F7y/pexels-elina-araja-1743227-3407118.jpg",
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
