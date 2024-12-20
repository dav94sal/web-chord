"""empty message

Revision ID: b1d338135d29
Revises:
Create Date: 2024-12-10 16:24:53.851538

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
from sqlalchemy.orm import sessionmaker

Session = sessionmaker()
# revision identifiers, used by Alembic.
revision = 'b1d338135d29'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('imageable_type', postgresql.ENUM('artist', 'merch', name='imageable_types'), nullable=False),
    sa.Column('imageable_id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('is_artist', sa.Boolean(), nullable=True),
    sa.Column('artist_name', sa.String(length=40), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('merchandise',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('price', sa.Float(precision=5, asdecimal=2), nullable=False),
    sa.Column('url', sa.String(), nullable=True),
    sa.Column('artist_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['artist_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tours',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('artist_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['artist_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shows',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('datetime', sa.DateTime(), nullable=False),
    sa.Column('city', sa.String(), nullable=False),
    sa.Column('state', sa.String(), nullable=False),
    sa.Column('venue', sa.String(), nullable=False),
    sa.Column('openers', sa.String(), nullable=True),
    sa.Column('tour_id', sa.Integer(), nullable=False),
    sa.Column('artist_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['artist_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['tour_id'], ['tours.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('shows')
    op.drop_table('tours')
    op.drop_table('merchandise')
    op.drop_table('users')
    op.drop_table('images')
    bind = op.get_bind()
    session = Session(bind=bind)
    session.execute('DROP TYPE imageable_types')
    # ### end Alembic commands ###
