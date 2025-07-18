from app.models import db, Image, environment, SCHEMA
from sqlalchemy.sql import text
from .data.artist_img_data import artist_imgs
from .data.merch_img_data import merch_images


def seed_images():
    # print("---------Image: ", user_imgs.images, "------------")
    for img in artist_imgs.values():
        db.session.add(Image(
            imageable_id=img["id"],
            imageable_type=img["type"],
            url=img["url"])
        )

    for img in merch_images:
        db.session.add(Image(
            imageable_id=img["id"],
            imageable_type=img["type"],
            url=img["url"])
        )

    db.session.commit()


def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM images"))

    db.session.commit()
