from .db import db
from datetime import datetime

class FriendRequest(db.Model):
    __tablename__ = 'friendRequests'

    id = db.Column(db.Integer, primary_key=True)
    friend_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    friend_request_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())


    def to_dict(self):
        return {
            'id': self.id,
            'friend_id': self.friend_id,
            'friend_request_id': self.friend_request_id
        }
