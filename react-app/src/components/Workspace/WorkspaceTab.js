import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import { getWorkspaceByUser, deleteWorkspaceById } from '../../store/workspace';
import CreateWorkSpaceForm from './WorkspaceForm';
import { Modal } from '../../context/Modal';
import './WorkspaceTab.css';

function WorkspaceTab() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const workspaces = useSelector(state => state.workspaces?.workspaces);

    const [showModal, setShowModal] = useState(false);

    const handleDelete = (workspace) => {
        dispatch(deleteWorkspaceById(workspace?.id))
        history.push('/taskboard')
    }

    useEffect(() => {
        dispatch(getWorkspaceByUser(sessionUser?.id));
    }, [dispatch, sessionUser])

    return (
        <>
            <div className="entire-workspace-container">
                <div className="workspace-container">
                    <p className="workspace-title-tag">Workspaces</p>
                    <div className="workspace-tag-box">
                        <i className="fa-solid fa-briefcase briefcase-icon"></i>
                        <p>My Workspace</p>
                    </div>
                    <div onClick={() => setShowModal(true)} className="add-workspace-btn">+ Add New Board</div>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <CreateWorkSpaceForm onClose={() => setShowModal(false)}/>
                        </Modal>
                    )}
                    <hr />
                    {workspaces?.map(workspace => (
                        <div key={workspace?.id} className="single-workspace">
                            <div className="workspace-detail-container">
                                <div className="workspace-detail">
                                    <Link to={`/taskboard/${workspace?.id}`}>{workspace?.name}</Link> {/*/taskboard/:workspaceId' */}
                                </div>
                                <i onClick={() => handleDelete(workspace)} className="fa-solid fa-trash-can delete-icon"></i>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WorkspaceTab;
