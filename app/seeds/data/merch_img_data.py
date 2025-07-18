from random import choice
from .merch_data import merchandise


urls = {
    "t-shirts": [
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-anna-nekrashevich-8532616.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-frans-van-heerden-201846-1566412.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-harrisonhaines-2788370.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-karolina-grabowska-6256315.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-kosma-kurlowicz-1051820-2062324.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-meymigrou-1933589.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-paggiarofrancesco-2294342.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-rdne-7502585.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-rdne-8198558.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-sebastiaan9977-1311590.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-victorluz2000-2050932.jpg",
    ],
    "tank-tops": [
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-cgardenhire12-2560326.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-matvalina-29637132.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-lina-1741240.jpg",
    ],
    "stickers": [
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-inga-sv-2902599.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-iselene-kei-borromeo-marzan-868491-1827548.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-introspectivedsgn-7472175.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-jonathanborba-3052727.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-laurisrozentals-3302183.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-markusspiske-2918027.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-sheinshine-1749900.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-thebstudio-937786.jpg",
    ],
    "albums": [
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/8b4580a5-7d42-4e1d-a68a-ef1875d48cb4.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/e1059868-19a2-4ca2-90d5-ad1085679df9.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-jonathanborba-3052727.jpg"
    ],
    "hoodies": [
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-annetnavi-1035692.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-ashutoshsonwani-1839564.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-gabby-k-6311606.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-mikhail-nilov-7886314.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-pixabay-47037.jpg",
    ],
    "hats": [
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-anthonyshkraba-production-8040841.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-frank-k-895836-1863476.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-yankrukov-9009503.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-cottonbro-6626903.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-alipazani-2613260.jpg",
    ],
    "sweatpants": [
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-matvalina-29637132.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-cgardenhire12-2560326.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-frank-k-895836-1863476.jpg",
    ],
    "generic": [
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-apasaric-3342739.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-happyend-6063811.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-mati-4734716.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-moose-photos-170195-1037992.jpg",
        "https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-moose-photos-170195-1037999.jpg",
    ],
}


def determine_type(merch):
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


def images_creator():
    images = []

    for i in range(len(merchandise)):
        merch = merchandise[i]
        merch_type = determine_type(merch)
        url = choice(urls[merch_type])

        images.append({
            "id": i+1,
            "type": "merch",
            "url": url
        })
    return images


merch_images = images_creator()
