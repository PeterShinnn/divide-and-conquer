from .db import db
from datetime import datetime

class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255))
    status = db.Column(db.String(70), default="")
    deadline = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('taskCategories.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    user = db.relationship('User', back_populates='tasks')
    task_category = db.relationship('TaskCategory', back_populates='tasks')

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'status': self.status,
            'deadline': self.deadline,
            'user_id': self.user_id,
            'category_id': self.category_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
