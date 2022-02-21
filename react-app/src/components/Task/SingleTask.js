import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './SingleTask.css';

function SingleTask({ task }) {
    const [startDate, setStartDate] = useState(new Date());
    
    const [taskDescription, setTaskDescription] = useState(task.description)

    return (
        <>
            <div className="single-task-information-container">
                <form onSubmit={() => console.log("e")}>
                    <input
                        className="task-description-name-input"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)} />
                </form>
                <div className="single-task-information">
                    {/* <div className="task-info task-padding">Task Deadline</div> */}
                    <div className="task-info task-padding">
                        <div className="calendar-container">
                            <DatePicker
                                className="calendar-picker"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            <i className="fa-solid fa-calendar calendar-icon"></i>
                        </div>
                    </div>
                    <div className="task-info task-padding">
                        <select className="status-option-container">
                            <option className="status-option"></option>
                            <option className="status-option">Done</option>
                            <option className="status-option">Working</option>
                            <option className="status-option">Stuck</option>
                        </select>
                    </div>
                    <div className="task-info"><i className="fa-solid fa-trash-can task-trash-icon"></i></div>
                </div>
            </div>

        </>
    )
}

export default SingleTask
