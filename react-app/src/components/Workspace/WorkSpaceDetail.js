import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createCategory, editWorkspace } from "../../store/workspace";
import SingleCategory from "../Category/SingleCategory";
import CreateWorkSpaceForm from "./WorkspaceForm";
import ProfilePage from "../Profile/ProfilePage";
import { Modal } from "../../context/Modal";
// import SearchResult from "../SearchResult/SearchResult";
import './WorkSpaceDetail.css';

function WorkSpaceDetail() {
    const dispatch = useDispatch();
    const { workspaceId } = useParams();
    const workspaces = useSelector(state => state.workspaces);
    const sessionUser = useSelector(state => state.session.user);

    const [wName, setWName] = useState("");
    // const [userNames, setUserName] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);

    const workspace = workspaces?.workspaces?.filter(w => w.id === parseInt(workspaceId))

    useEffect(() => {
        if (workspace) setWName(workspace[0]?.name)
        // setUserName([]);
    }, [dispatch, workspaceId])


    const doNothing = (e) => {
        e.preventDefault();

        if (wName.length < 3) {
            setWName("Name must be 3 or more characters");
            dispatch(editWorkspace(workspaceId, "Name must be 3 or more characters"));
        }
    }

    const changeName = (e) => {
        setWName(e.target.value);
        dispatch(editWorkspace(workspaceId, e.target.value));

    }

    const createNewCategory = (id) => {
        dispatch(createCategory(id, "New Category")).then(() => console.log(workspaces))
    }

    // const handleSearch = async (e) => {
    //     if (e.target.value === "") {
    //         setUserName([]);
    //         return;
    //     }

    //     const response = await fetch(`/api/users/${e.target.value}`);

    //     if (response.ok) {
    //         const users = await response.json();
    //         setUserName(users.users);
    //     }
    // }

    return (
        <div className="entire-workspace-detail-tab">
            {workspaceId ?
                <div className="workspace-full-detail-container">
                    <div className="workspace-full-detail-header">
                        <form className="workspace-name-edit-input" onSubmit={(e) => doNothing(e)}>
                            <input
                                type="text"
                                value={wName}
                                className="form-edit-input"
                                onChange={(e) => changeName(e)} />
                        </form>
                        {/* <p>**Please Press Enter after changing task name**</p> */}
                        <div className="right-side-detail-header">
                            <div onClick={() => setShowProfileModal(true)} className="user-profile-tab">current user: {sessionUser?.username}</div>
                            {showProfileModal && (
                                <Modal onClose={() => setShowProfileModal(false)}>
                                    <ProfilePage user={sessionUser} />
                                </Modal>
                            )}
                        </div>
                    </div>
                    <div>
                        <button onClick={() => createNewCategory(workspaceId)} className="add-category-btn">Add Category</button>
                    </div>
                    {workspace ? (workspace[0]?.categories?.map(category => (
                        <SingleCategory key={category.id} category={category} />)
                    )) : console.log(workspace)
                    }
                </div>

                :
                <div className="no-workspace-container">
                    <h2 className="home-workspace-direction">Hi there!</h2>
                    {/* <div className="user-search-bar">
                        <input
                            //value={searchName}
                            onChange={(e) => handleSearch(e)}
                            className="search-bar"
                            placeholder="Search for other users" />

                        {userNames && (
                            <div className="search-result-container">
                                {userNames.map(u => (
                                    <SearchResult key={u.username} user={u}/>
                                    // <div key={u.username} className="search-result">{u.username}</div>
                                ))}
                            </div>
                        )}
                    </div> */}
                    <button onClick={() => setShowModal(true)} className="create-workspace-btn">Create new workspace</button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <CreateWorkSpaceForm onClose={() => setShowModal(false)} />
                        </Modal>
                    )}
                </div>
            }

        </div>
    )
}

export default WorkSpaceDetail;
