from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Post, db, Vote, User
from sqlalchemy import func, literal_column
from ..forms import AddPostForm

post_routes = Blueprint('posts', __name__)


# Get all posts
@post_routes.route('/all')
def posts():
    page = request.args.get('page') or 1
    fltr = request.args.get('fltr')
    page = int(page) if page else 1

    upvotes_calc = func.sum(db.case((Vote.vote == 'upvote', 1), else_=0)).label('upvotes_count')
    downvotes_calc = func.sum(db.case((Vote.vote == 'downvote', 1), else_=0)).label('downvotes_count')
    total_votes = func.sum(
        db.case(
            (Vote.votable_type == 'post' and Vote.vote == 'upvote', 1),
            (Vote.votable_type == 'post' and Vote.vote == 'downvote', -1),
            else_=0
        )
    ).label('total_votes')

    query = db.session.query(
        Post,
        upvotes_calc,
        downvotes_calc,
        total_votes
    ).outerjoin(Vote, Vote.votable_id == Post.id)

    # Eager load author and profile pic
    query = query.options(db.joinedload(Post.author).joinedload(User.profile_pic))

    if fltr == 'popular':
        query = query.group_by(Post.id)\
            .order_by(total_votes.desc()) # Order by the calculated total votes
    else:
        # For other filters, group by Post.id to ensure aggregation still works
        # and order by creation date by default.
        query = query.group_by(Post.id)\
            .order_by(Post.created_at.desc())

    posts_paginated = query.paginate(page=page, per_page=10) # Apply paginate directly to the constructed query
    posts = posts_paginated.items

    # Iterate through the results (which are tuples of Post object and calculated values)
    posts_data = []
    for post_obj, upvotes_val, downvotes_val, total_votes_val in posts:
        # Pass all calculated values to the to_dict method
        posts_data.append(post_obj.to_dict(
            calculated_upvotes=upvotes_val,
            calculated_downvotes=downvotes_val,
            calculated_total_votes=total_votes_val
        ))
    return posts_data


# Create a new post
@post_routes.route('/new', methods=['POST'])
@login_required
def add_post():
    form = AddPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post(post=form.data['post'],
                    user_id=current_user.id)

        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    return form.errors, 401


# Edit a post
@post_routes.route('/<int:post_id>/edit', methods=['PUT'])
@login_required
def edit_post(post_id):
    form = AddPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    post = Post.query.get(post_id)

    if post.user_id != current_user.id:
        return {"errors": "Unauthorized"}, 401
    if form.validate_on_submit():
        post.post = form.data['post']
        db.session.commit()
        return post.to_dict()
    return form.errors, 401


# delete a post
@post_routes.route('/<int:post_id>/delete', methods=['DELETE'])
@login_required
def delete_post(post_id):
    post = Post.query.get(post_id)

    if post.user_id != current_user.id:
        return {"errors": "Unauthorized"}, 401

    db.session.delete(post)
    db.session.commit()
    return {"message": "Post deleted"}
