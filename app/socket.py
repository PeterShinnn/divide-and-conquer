from flask_socketio import SocketIO, emit, join_room, leave_room, send
import os

# configure cors_allowed_origins
if os.environ.get('FLASK_ENV') == 'production':
    origins = [
        'http://actual-app-url.herokuapp.com',
        'https://actual-app-url.herokuapp.com'
    ]
else:
    origins = "*"

# initialize your socket instance
socketio = SocketIO(cors_allowed_origins=origins)


# handle chat messages
@socketio.on("chat")
def handle_chat(data):
    emit("chat", data, broadcast=True)

# handle join chat
@socketio.on('join')
def join(data):
    join_room(data['room'])


# handle leave chat
@socketio.on("leave")
def leave(data):
    leave_room(data['room'])
