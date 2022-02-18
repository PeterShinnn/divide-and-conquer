import './SingleCategory.css';

function SingleCategory({ category }) {
    return (
        <>
            {console.log(category)}
            <div className="category-header-container">
                <div className="category-name-and-menu">
                    <div className="dropdown-icon-container">
                        <i className="fa-solid fa-caret-down drop-down-icon"></i>
                    </div>
                    <div className="category-name">{category.name}</div>
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
