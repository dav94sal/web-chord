from flask.cli import AppGroup
from .users import seed_users, undo_users
from .images import seed_images, undo_images
from .tours import seed_tours, undo_tours
from .shows import seed_shows, undo_shows
from .merchandise import seed_merchandise, undo_merchandise

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_images()
        undo_tours()
        undo_shows()
        undo_merchandise()

    seed_users()
    seed_images()
    seed_tours()
    seed_shows()
    seed_merchandise()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_images()
    undo_tours()
    undo_shows()
    undo_merchandise()
    # Add other undo functions here
