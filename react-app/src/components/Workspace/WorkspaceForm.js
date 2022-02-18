import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; //, useSelector 

import { createWorkspace } from '../../store/workspace';
import './WorkspaceForm.css';

const CreateWorkSpaceForm = ({onClose}) => {

    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);

    const [name, setName] = useState("");
    //const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //dispatch(createWorkspace(name));

        const data = dispatch(createWorkspace(name));
        if (data) {
            onClose()
        }
        //if (data) setErrors(data);
    }

    return (
        <>
            <div className="workspace-form-header">
                <h2>Create Workspace</h2>
                <i onClick={onClose}className="fa-solid fa-x close-icon"></i>
            </div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="workspace-error-container">
                    {/* {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))} */}
                </div>
                <div className="ws-form-input">
                    <label>Workspace name:</label>
                    <input
                        type="text"
                        value={name}
                        className="workspace-input"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter workspace name here"
                        required
                    />
                </div>
                <h2 className="fake-tag-line">Please select the categories in this board</h2>
                <div className="fake-category">
                    <div className="fake-category-div">
                        <input type="checkbox" id="CreateDesign" />
                        <label>Creative & Design</label>
                    </div>
                    <div className="fake-category-div">
                        <input type="checkbox" id="IT" />
                        <label>IT</label>
                    </div>
                    <div className="fake-category-div">
                        <input type="checkbox" id="SoftwareDevelopment" />
                        <label>Software Development</label>
                    </div>
                    <div className="fake-category-div">
                        <input type="checkbox" id="Marketing" />
                        <label>Marketing</label>
                    </div>
                    <div className="fake-category-div">
                        <input type="checkbox" id="ProjectManagement" />
                        <label>Project Management</label>
                    </div>
                    <div className="fake-category-div">
                        <input type="checkbox" id="SalesCRM" />
                        <label>Sales & CRM</label>
                    </div>
                    <div className="fake-category-div">
                        <input type="checkbox" id="TaskManagement" />
                        <label>Task Management</label>
                    </div>
                    <div className="fake-category-div">
                        <input type="checkbox" id="HR" />
                        <label>HR</label>
                    </div>
                    <div className="fake-category-div">
                        <input type="checkbox" id="Operations" />
                        <label>Operations</label>
                    </div>
                </div>
                <button type="submit" className="create-workspace-btn">Create Workspace</button>
            </form>
        </>
    )
}

export default CreateWorkSpaceForm;
