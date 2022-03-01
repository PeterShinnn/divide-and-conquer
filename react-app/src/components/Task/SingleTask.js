import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";

import { deleteTaskById, editTask, editTaskDate } from "../../store/workspace";
import "react-datepicker/dist/react-datepicker.css";
import './SingleTask.css';

function SingleTask({ task }) {
    const dispatch = useDispatch();

    const [showStatusMenu, setStatusMenu] = useState(false);
    const [taskStatus, setTaskStatus] = useState(task.status);
    const [taskDescription, setTaskDescription] = useState(task.description)
    const [startDate, setStartDate] = useState(task.deadline ? new Date(task.deadline) : null);

    // const handleEditName = (e) => {
    //     e.preventDefault();

    //     if (taskDescription === "") {
    //         const payload = {
    //             'id': task.id,
    //             'description': "no task name",
    //             'status': taskStatus
    //         }
    //         dispatch(editTask(payload));
    //     } else {
    //         const payload = {
    //             'id': task.id,
    //             'description': taskDescription,
    //             'status': taskStatus
    //         }
    //         dispatch(editTask(payload));
    //     }
    // }

    const handleEditName = (e) => {
        setTaskDescription(e.target.value)
        const payload = {
            'id': task.id,
            'description': e.target.value,
            'status': taskStatus
        }
        dispatch(editTask(payload));
        //setTimeout(() => { dispatch(editTask(payload)) }, 5000);
    }

    const handleDateChange = (date) => {
        setStartDate(date);
        dispatch(editTaskDate(task.id, date));
    }

    const handleTaskStatus = (e) => {
        setTaskStatus(e.target.innerText);
        const payload = {
            'id': task.id,
            'description': taskDescription,
            'status': e.target.innerText
        }
        dispatch(editTask(payload));
        setStatusMenu(false);
    }

    const handleDeleteTask = () => {
        dispatch(deleteTaskById(task.id));
    }

    return (
        <>
            <div className="single-task-information-container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        autoFocus={true}
                        value={taskDescription}
                        className="task-description-name-input"
                        onChange={(e) => handleEditName(e)} />
                </form>

                {/* <div className="task-info task-padding">Task Deadline</div> */}
                <div className="task-info task-padding">
                    <div className="calendar-container">
                        <DatePicker
                            className="calendar-picker"
                            selected={startDate}
                            onChange={(date) => handleDateChange(date)}
                        />
                        <i className="fa-solid fa-calendar calendar-icon"></i>
                    </div>
                </div>
                <div className={`task-info task-padding task-${taskStatus}`}>
                    <div className="status-picker-container">
                        <button onClick={() => showStatusMenu ? setStatusMenu(false) : setStatusMenu(true)} className={`task-status`}>{taskStatus}</button>
                        {showStatusMenu ?
                            <ul className="status-picker-list">
                                <li className="task- status-option status-option-none" value={""} onClick={(e) => handleTaskStatus(e)}></li>
                                <li className="task-Stuck status-option" value={"Stuck"} onClick={(e) => handleTaskStatus(e)}>Stuck</li>
                                <li className="task-In status-option" value={"In Progress"} onClick={(e) => handleTaskStatus(e)}>In Progress</li>
                                <li className="task-Done status-option" value={"Done"} onClick={(e) => handleTaskStatus(e)}>Done</li>
                            </ul>
                            : <></>
                        }
                    </div>
                </div>
                <div className="task-info">
                    <i onClick={() => handleDeleteTask()} className="fa-solid fa-trash-can task-trash-icon"></i>
                </div>
                {/* <div className="single-task-information">
                </div> */}
            </div>

        </>
    )
}

export default SingleTask
