import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { editCategoryName } from '../../store/workspace';
import './SingleCategory.css';

function SingleCategory({ category }) {
    const dispatch = useDispatch();
    const [categoryName, setCategoryName] = useState(category.name)

    const handleChange = (e) => {
        e.preventDefault();
        dispatch(editCategoryName(category.id, categoryName));
    }

    return (
        <>
            <div className="category-header-container">
                <div className="category-name-and-menu">
                    <div className="dropdown-icon-container">
                        <i className="fa-solid fa-caret-down drop-down-icon"></i>
                    </div>
                    <form className="category-name-form" onSubmit={(e)=> handleChange(e)}>
                        <input
                            type="text"
                            value={categoryName}
                            className="category-name-input"
                            onChange={(e) => setCategoryName(e.target.value)} />
                    </form>
                    {/* <div className="category-name">{category.name}</div> */}
                </div>
                <div className="category-items-container">
                    <div className="category-item">Deadline</div>
                    <div className="category-item">Status</div>
                    <div className="category-item"><i className="fa-solid fa-trash-can"></i></div>
                </div>

            </div>
        </>
    )
}

export default SingleCategory
