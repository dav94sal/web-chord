from flask.cli import AppGroup
from .users import seed_users, undo_users
from .artists import seed_artists, undo_artists
from .images import seed_images, undo_images
from .tours import seed_tours, undo_tours
from .shows import seed_shows, undo_shows
from .merchandise import seed_merchandise, undo_merchandise
from .profile_pics import seed_profile_pics, undo_profile_pics

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

    seed_users()
    seed_artists()
    seed_images()
    seed_tours()
    seed_shows()
    seed_merchandise()
    seed_profile_pics()

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
