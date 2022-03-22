import React, { useEffect } from 'react'; //,  useState } 
import { useDispatch ,useSelector } from 'react-redux';

import { makeFriendRequest } from '../../store/request';
import './ProfilePage.css';

function ProfilePage({ user }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const addFriend = (id) => {
        dispatch(makeFriendRequest(id));
    }

    useEffect(() => {

    }, [dispatch])

    return (
        <>
            <div  key={user.username} className="profile-information-container">
                <h2 className="user_name">{user?.full_name}</h2>
                <div className="user-information">
                    <label><strong>Email: </strong></label>
                    <p className="user_email">
                        {user?.email}
                    </p>
                </div>
                <div className="user-information">
                    <label><strong>Username: </strong></label>
                    <p className="user_username">
                        {user?.username}
                    </p>
                </div>
                
                {sessionUser?.id === user.id ?
                    <></>
                    :
                    <button onClick={() => addFriend(user.id)} className="add-friend-btn">Add Friend</button>
                }
            </div>
        </>
    )
}

export default ProfilePage;
