import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SideNavBar from '../NavBar/SideNavBar';
import WorkspaceTab from '../Workspace/WorkspaceTab';
import { getFriendRequest } from '../../store/request';
import WorkSpaceDetail from '../Workspace/WorkSpaceDetail';
import './TaskBoard.css';

function TaskBoard() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getFriendRequest());
    }, [dispatch])
    
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
