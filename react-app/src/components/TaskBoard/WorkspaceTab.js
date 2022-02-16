import React from 'react';

// garbage: <i className="fa-solid fa-trash"></i>
// briefcase: <i className="fa-solid fa-briefcase"></i>

import './WorkspaceTab.css';

function WorkspaceTab() {
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
                </div>
            </div>
        </>
    )
}

export default WorkspaceTab;
