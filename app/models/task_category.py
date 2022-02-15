from .db import db
from datetime import datetime

class TaskCategory(db.Model):
    __tablename__ = 'taskCategories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), default="Group")
    user_id = db.Column(db.Integer, nullable=False)
    workspace_id = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'user_id': self.user_id,
            'workspace_id': self.workspace_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
