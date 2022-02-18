import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //, useDispatch 

import { editWorkspace } from "../../store/workspace";
import './WorkSpaceDetail.css';

function WorkSpaceDetail() {
    const dispatch = useDispatch();
    const { workspaceId } = useParams();
    const workspaces = useSelector(state => state.workspaces)
    
    const [wName, setWName] = useState("");

    const workspace = workspaces?.workspaces?.filter( w => w.id === parseInt(workspaceId) )

    useEffect(()=>{
        if (workspace) setWName(workspace[0]?.name)
    },[dispatch, workspaceId])

    const changeName = async (e) => {
        e.preventDefault();
        dispatch(editWorkspace(workspaceId, wName));
    }

    return (
        <>
            {workspaceId ?
                <div className="workspace-full-detail-container">
                    <div className="workspace-full-detail-header">
                        <form onSubmit={(e) => changeName(e)}>
                            <input 
                                type="text"
                                value={wName}
                                className="form-edit-input"
                                onChange={(e) => setWName(e.target.value)} />
                        </form>
                    </div>
                </div> : 
                <div>
                    <h2>Please Select a Workspace</h2>
                </div>
            }

        </>
    )
}

export default WorkSpaceDetail;
