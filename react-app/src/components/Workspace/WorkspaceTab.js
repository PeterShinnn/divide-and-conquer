import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { getWorkspaceByUser } from '../../store/workspace';
import './WorkspaceTab.css';

function WorkspaceTab() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const workspaces = useSelector(state => state.workspaces?.workspaces);

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
                    <div className="add-workspace-btn">+ Add New Board</div>
                    <hr />
                    {workspaces?.map(workspace => (
                        <div key={workspace?.id} className="single-workspace">
                            <div className="workspace-detail-container">
                                <div className="workspace-detail">
                                    <Link to='#'>{workspace?.name}</Link> {/*/taskboard/:workspaceId' */}
                                </div>
                                <i onClick={() => console.log("add delete func")} className="fa-solid fa-trash-can delete-icon"></i>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WorkspaceTab;
