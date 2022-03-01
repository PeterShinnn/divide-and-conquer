import React from 'react'; //, { useEffect, useState } 
import { useSelector } from 'react-redux';

import './ProfilePage.css';

function ProfilePage({ user }) {
    const sessionUser = useSelector(state => state.session.user);

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
                
                {/* {sessionUser?.id === user.id ?
                    <></>
                    :
                    <button className="add-friend-btn">Add Friend</button>
                } */}
            </div>
        </>
    )
}

export default ProfilePage;
