from .artist_data import artists

merchandise = []
templates = [
    {
        "name": "Sticker",
        "price": 1.50,
        "url": "https://squareup.com/us/en",
        "artist_id": 1,
    },
    {
        "name": "Album 1",
        "price": 9.00,
        "url": "https://squareup.com/us/en",
        "artist_id": 1,
    },
    {
        "name": "Album 2",
        "price": 10.00,
        "url": "https://squareup.com/us/en",
        "artist_id": 1,
    },
    {
        "name": "Tank Top 1",
        "price": 18.50,
        "url": "https://squareup.com/us/en",
        "artist_id": 1,
    },
    {
        "name": "Tank Top 2",
        "price": 20.00,
        "url": "https://squareup.com/us/en",
        "artist_id": 1,
    },
    {
        "name": "T-Shirt 1",
        "price": 20.00,
        "url": "https://squareup.com/us/en",
        "artist_id": 1,
    },
    {
        "name": "T-Shirt 2",
        "price": 22.50,
        "url": "https://squareup.com/us/en",
        "artist_id": 1,
    },
    {
        "name": "Hoodie 1",
        "price": 23.50,
        "url": "https://squareup.com/us/en",
        "artist_id": 1,
    },
    {
        "name": "Hoodie 2",
        "price": 25.00,
        "url": "https://squareup.com/us/en",
        "artist_id": 1,
    },
]


for i in range(len(artists)):
    for j in range(len(templates)):
        merch = templates[j].copy()
        merch["artist_id"] = artists[i]["id"]
        merchandise.append(merch)
