import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ProfilePage from '../Profile/ProfilePage';

function SearchResult({ user }) {
    const [showUserModal, setShowUserModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowUserModal(true)} className="search-result">{user?.username}</div>
            {showUserModal && (
                <Modal onClose={() => setShowUserModal(false)}>
                    <ProfilePage key={user?.id} user={user} />
                </Modal>
            )}
        </>
    )
}

export default SearchResult;
