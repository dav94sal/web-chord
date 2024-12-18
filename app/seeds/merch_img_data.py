from random import choice
from .merch_data import merchandise

class MerchImages:
    def __init__(self):
        self.urls = {
            "t-shirts": ["https://i.ibb.co/nLyX4Wv/pexels-anna-nekrashevich-8532616.jpg",
                         "https://i.ibb.co/ZzSFz0g/pexels-frans-van-heerden-201846-1566412.jpg",
                         "https://i.ibb.co/JzP9f58/pexels-harrisonhaines-2788370.jpg",
                         "https://i.ibb.co/Gvhmg7K/pexels-karolina-grabowska-6256315.jpg",
                         "https://i.ibb.co/BNZTLMz/pexels-kosma-kurlowicz-1051820-2062324.jpg",
                         "https://i.ibb.co/HxMY61k/pexels-meymigrou-1933589.jpg",
                         "https://i.ibb.co/x7yWXbG/pexels-paggiarofrancesco-2294342.jpg",
                         "https://i.ibb.co/RgZ3H96/pexels-rdne-7502585.jpg",
                         "https://i.ibb.co/zsR9Psw/pexels-rdne-8198558.jpg",
                         "https://i.ibb.co/WgFTXgM/pexels-sebastiaan9977-1311590.jpg",
                         "https://i.ibb.co/7WtzVqp/pexels-victorluz2000-2050932.jpg",
                         ],
            "tank-tops": ["https://i.ibb.co/S6vMJdJ/pexels-cgardenhire12-2560326.jpg",
                          "https://i.ibb.co/pJPS1nS/pexels-matvalina-29637132.jpg",
                          ],
            "stickers": ["https://i.ibb.co/9T8xmqy/pexels-inga-sv-2902599.jpg",
                         "https://i.ibb.co/HBhbxPH/pexels-iselene-kei-borromeo-marzan-868491-1827548.jpg",
                         "https://i.ibb.co/tqFRjW4/pexels-introspectivedsgn-7472175.jpg",
                         "https://i.ibb.co/rwS4sjn/pexels-jonathanborba-3052727.jpg",
                         "https://i.ibb.co/xS2gTZZ/pexels-laurisrozentals-3302183.jpg",
                         "https://i.ibb.co/NnycqV7/pexels-markusspiske-2918027.jpg",
                         "https://i.ibb.co/ft7HWBH/pexels-sheinshine-1749900.jpg",
                         "https://i.ibb.co/tsk0QQf/pexels-thebstudio-937786.jpg",
                         ],
            "albums": ["https://i.ibb.co/sVBFDBy/8b4580a5-7d42-4e1d-a68a-ef1875d48cb4.jpg",
                       "https://i.ibb.co/TWH5cQJ/e1059868-19a2-4ca2-90d5-ad1085679df9.jpg",
                       "https://i.ibb.co/rwS4sjn/pexels-jonathanborba-3052727.jpg"],
            "hoodies": ["https://i.ibb.co/3WpzB1Y/pexels-annetnavi-1035692.jpg",
                        "https://i.ibb.co/BzBZXqb/pexels-ashutoshsonwani-1839564.jpg",
                        "https://i.ibb.co/rct12VQ/pexels-gabby-k-6311606.jpg",
                        "https://i.ibb.co/wK8grxS/pexels-mikhail-nilov-7886314.jpg",
                        "https://i.ibb.co/7YGG91j/pexels-pixabay-47037.jpg",
                        ],
            "hats": ["https://i.ibb.co/YDnsKmt/pexels-anthonyshkraba-production-8040841.jpg",
                     "https://i.ibb.co/JCJKhhd/pexels-frank-k-895836-1863476.jpg",
                     "https://i.ibb.co/4Sb6tjN/pexels-yankrukov-9009503.jpg",
                     ],
            "sweatpants": ["https://i.ibb.co/pJPS1nS/pexels-matvalina-29637132.jpg",
                           "https://i.ibb.co/S6vMJdJ/pexels-cgardenhire12-2560326.jpg",
                           "https://i.ibb.co/JCJKhhd/pexels-frank-k-895836-1863476.jpg",
                           ],
            "generic": ["https://i.ibb.co/dr054K4/pexels-apasaric-3342739.jpg",
                        "https://i.ibb.co/GTx6Gfx/pexels-happyend-6063811.jpg",
                        "https://i.ibb.co/88Bq0fc/pexels-mati-4734716.jpg",
                        "https://i.ibb.co/pZLMYs0/pexels-moose-photos-170195-1037992.jpg",
                        "https://i.ibb.co/gF5grq4/pexels-moose-photos-170195-1037999.jpg",
                        ]
        }

        self.images = self.images_creator()

    def images_creator(self):
        images = []
        # idx = [i for i in range(len(self.urls))]
        # shuffle(idx)

        for i in range(len(merchandise)):
            merch = merchandise[i]
            merch_type = self.merch_type(merch)
            url = choice(self.urls[merch_type])

            images.append({
                "id": i+1,
                "type": "merch",
                "url": url
            })
        return images

    def merch_type(self, merch):
        if "T-Shirt" in merch["name"]:
            return "t-shirts"
        elif "Sticker" in merch["name"]:
            return "stickers"
        elif "Album" in merch["name"]:
            return "albums"
        elif "Tank Top" in merch["name"]:
            return "tank-tops"
        elif "Hoodie" in merch["name"]:
            return "hoodies"
        elif "Sweatpants" in merch["name"]:
            return "sweatpants"
        elif "Hat" in merch["name"]:
            return "hats"
        else:
            return "generic"
