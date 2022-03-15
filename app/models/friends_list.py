from .db import db

class FriendList(db.Model):
    __tablename__ = 'friendsList'

    id = db.Column(db.Integer, primary_key=True)
    friend1_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    friend2_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'friend_id': self.friend1_id,
            'friend2_id': self.friend2_id
        }
