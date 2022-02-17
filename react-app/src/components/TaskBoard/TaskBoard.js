import React from 'react';
import { useSelector } from 'react-redux'; //, useDispatch
import { Redirect } from 'react-router-dom';

import SideNavBar from '../NavBar/SideNavBar';
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
                <h2>Main Content</h2>
            </div>
        </>
    )
}

export default TaskBoard;
