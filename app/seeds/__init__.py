from flask.cli import AppGroup
from .users import seed_users, undo_users
from .artists_seeders import seed_artists, undo_artists
from .images_seeder import seed_images, undo_images
from .tours_seeder import seed_tours, undo_tours
from .shows import seed_shows, undo_shows
from .merchandise import seed_merchandise, undo_merchandise
from .profile_pics import seed_profile_pics, undo_profile_pics
from .posts_seeder import seed_posts, undo_posts
from .comments_seeder import seed_comments, undo_comments
from .vote_seeder import seed_votes, undo_votes

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        undo_users()
        undo_artists()
        undo_images()
        undo_tours()
        undo_shows()
        undo_merchandise()
        undo_profile_pics()
        undo_posts()
        undo_comments()
        undo_votes()

    seed_users()
    seed_artists()
    seed_images()
    seed_tours()
    seed_shows()
    seed_merchandise()
    seed_profile_pics()
    seed_posts()
    seed_comments()
    seed_votes()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_artists()
    undo_images()
    undo_tours()
    undo_shows()
    undo_merchandise()
    undo_profile_pics()
    undo_posts()
    undo_comments()
    undo_votes()

# Creates the `flask seed merch` command
@seed_commands.command('merch')
def seed_merch():
    undo_merchandise()
    seed_merchandise()

# Creates the `flask seed images` command
@seed_commands.command('images')
def seed_lone_images():
    undo_images()
    seed_images()
