import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //, useDispatch 

import { editWorkspace } from "../../store/workspace";
import './WorkSpaceDetail.css';
import SingleCategory from "../Category/SingleCategory";

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
                        <form className="workspace-name-edit-input" onSubmit={(e) => changeName(e)}>
                            <input 
                                type="text"
                                value={wName}
                                className="form-edit-input"
                                onChange={(e) => setWName(e.target.value)} />
                        </form>
                        <div className="right-side-detail-header">
                            <div className="">Invite</div>
                            <div className="">More info</div>
                            <div className="">...</div>
                        </div>
                    </div>
                    <div>
                        <button className="add-category-btn">Add Category</button>
                    </div>
                    { workspace ? (workspace[0].categories.map(category => (
                        <SingleCategory key={category.id} category={category}/>)
                    )) : console.log(workspace) 
                    }
                </div> 
                
                : 
                <div>
                    <h2>Please Select a Workspace</h2>
                </div>
            }

        </>
    )
}

export default WorkSpaceDetail;
