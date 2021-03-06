from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(255), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    workspaces = db.relationship('Workspace', back_populates='user',cascade="all, delete-orphan")
    task_categories = db.relationship('TaskCategory',back_populates='user',cascade="all, delete-orphan")
    tasks = db.relationship('Task', back_populates='user',cascade="all, delete-orphan")
    curr_user = db.relationship('FriendRequest', back_populates="friend", foreign_keys="FriendRequest.friend_id", cascade="all,delete-orphan")
    request_user = db.relationship('FriendRequest', back_populates="requester", foreign_keys="FriendRequest.requester_id", cascade="all,delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'full_name': self.full_name,
            'username': self.username,
            'email': self.email,
            'workspaces': [workspace.to_dict() for workspace in self.workspaces]
        }
