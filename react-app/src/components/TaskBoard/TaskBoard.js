import React from 'react';
import { useSelector } from 'react-redux'; //, useDispatch
import { Redirect } from 'react-router-dom';

import SideNavBar from '../NavBar/SideNavBar';
import WorkSpaceDetail from '../Workspace/WorkSpaceDetail';
import WorkspaceTab from '../Workspace/WorkspaceTab';
import './TaskBoard.css';

function TaskBoard() {
    //const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return <Redirect to='/login' />

    return (
        <>
            <div className='taskboard-container'>
                <SideNavBar />
                <WorkspaceTab />
                <WorkSpaceDetail />
            </div>
        </>
    )
}

export default TaskBoard;
