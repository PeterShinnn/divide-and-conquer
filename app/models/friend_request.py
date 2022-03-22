from .db import db
from datetime import datetime

class FriendRequest(db.Model):
    __tablename__ = 'friendRequests'

    id = db.Column(db.Integer, primary_key=True)
    friend_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    requester_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    friend = db.relationship("User", back_populates="curr_user", foreign_keys=[friend_id])
    requester = db.relationship("User", back_populates="request_user", foreign_keys=[requester_id])

    def to_dict(self):
        return {
            'id': self.id,
            'friend_id': self.friend_id,
            'requester_id': self.requester_id
        }
