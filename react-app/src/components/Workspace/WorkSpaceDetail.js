import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

import { createCategory, editWorkspace } from "../../store/workspace";
import SingleCategory from "../Category/SingleCategory";
import CreateWorkSpaceForm from "./WorkspaceForm";
import { Modal } from "../../context/Modal";
import './WorkSpaceDetail.css';

function WorkSpaceDetail() {
    const dispatch = useDispatch();
    const { workspaceId } = useParams();
    const workspaces = useSelector(state => state.workspaces);
    const sessionUser = useSelector(state => state.session.user);

    const [wName, setWName] = useState("");
    const [userNames, setUserName] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const workspace = workspaces?.workspaces?.filter( w => w.id === parseInt(workspaceId) )

    useEffect(()=>{
        if (workspace) setWName(workspace[0]?.name)
    },[dispatch, workspaceId])

    const changeName = async (e) => {
        e.preventDefault();
        dispatch(editWorkspace(workspaceId, wName));
    }

    const createNewCategory = (id) => {
        dispatch(createCategory(id, "New Category"))
    }

    const handleSearch = async (e) => {
        if (e.target.value === "") {
            setUserName([]);
            return;
        }

        const response = await fetch(`/api/users/${e.target.value}`);
        
        if (response.ok){
            const users = await response.json();
            setUserName(users.users);
        }
    }

    return (
        <>
            {workspaceId ?
                <div className="workspace-full-detail-container">
                    <div className="workspace-full-detail-header">
                        <form className="workspace-name-edit-input" onSubmit={(e) => changeName(e)}>
                            <input 
                                type="text"
                                value={wName}
                                className="form-edit-input"
                                onChange={(e) => setWName(e.target.value)} />
                        </form>
                        <div className="right-side-detail-header">
                            <div className="user-profile-tab">current user: {sessionUser?.username}</div>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => createNewCategory(workspaceId)} className="add-category-btn">Add Category</button>
                    </div>
                    { workspace ? (workspace[0]?.categories?.map(category => (
                        <SingleCategory key={category.id} category={category}/>)
                    )) : console.log(workspace) 
                    }
                </div> 
                
                : 
                <div className="no-workspace-container">
                    <h2 className="home-workspace-direction">Please Select a Workspace</h2>
                    <div className="user-search-bar">
                        <input 
                        //value={searchName}
                        onChange={(e) => handleSearch(e)}
                        className="search-bar" 
                        placeholder="Search other user"/>
                        
                        { userNames && (
                            <div className="search-result-container">
                            {userNames.map(u => (
                                <div className="search-result">{u.username}</div>
                            ))}
                            </div>
                        )}
                    </div>
                    <button onClick={() => setShowModal(true)} className="create-workspace-btn">Create new workspace</button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <CreateWorkSpaceForm onClose={() => setShowModal(false)}/>
                        </Modal>
                    )}
                </div>
            }

        </>
    )
}

export default WorkSpaceDetail;
