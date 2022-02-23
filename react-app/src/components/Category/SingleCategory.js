import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCategoryName, deleteCategoryById, createTask } from '../../store/workspace';
import SingleTask from '../Task/SingleTask';
import './SingleCategory.css';

function SingleCategory({ category }) {
    const dispatch = useDispatch();
    const [categoryName, setCategoryName] = useState(category.name)
    const [newTask, setNewTask] = useState("");

    const doNothing = (e) => {
        e.preventDefault();
    }


    const handleChange = (e) => {
        setCategoryName(e.target.value)
        dispatch(editCategoryName(category.id, e.target.value));
    }

    const handleDelete = () => {
        dispatch(deleteCategoryById(category.id))
    }

    const handleTaskAdd = (e) => {
        e.preventDefault();
        dispatch(createTask(category.id, newTask));
        setNewTask("");
    }

    return (
        <>
            <div className="category-header-container">
                <div className="category-name-and-menu">
                    <div className="dropdown-icon-container">
                        <i className="fa-solid fa-caret-down drop-down-icon"></i>
                    </div>
                    <form className="category-name-form" onSubmit={(e) => doNothing(e)}>
                        <input
                            type="text"
                            value={categoryName}
                            className="category-name-input"
                            onChange={(e) => handleChange(e)} />
                    </form>
                </div>
                <div className="category-items-container">
                    <div className="category-item cat-item-padding">Deadline</div>
                    <div className="category-item cat-item-padding">Status</div>
                    <div className="category-item"><i onClick={() => handleDelete()} className="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
            <div className="single-task-container">
                {category?.tasks?.map(task => (
                    <SingleTask key={task.description} task={task} />
                ))}
            </div>
            <form className="create-task-input-form" onSubmit={(e) => handleTaskAdd(e)}>
                <input 
                    className="create-task-input"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Create new task"/>
                <button disabled={newTask.length < 3} className="create-task-btn" type='submit'>Add</button>
            </form>
        </>
    )
}

export default SingleCategory
