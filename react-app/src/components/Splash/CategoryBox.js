function CategoryBox() {

    return (
        <>
            <div className="category-container">
                <div className="category-box-container">
                    <div className="category-box CD-box">
                        <input className="check-box" type="checkbox" />
                        <i className="fa-solid fa-chalkboard-user CD icon"></i>
                        <p className="category-description">Creative & design</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div className="category-box IT-box">
                        <input className="check-box" type="checkbox" />
                        <i className="fa-solid fa-sliders IT icon"></i>
                        <p className="category-description">IT</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div className="category-box SD-box">
                        <input className="check-box" type="checkbox" />
                        <i className="fa-solid fa-code SD icon"></i>
                        <p className="category-description">Software Development</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div className="category-box MK-box">
                        <input className="check-box" type="checkbox" />
                        <i className="fa-solid fa-list-check MK icon"></i>
                        <p className="category-description">Marketing</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div className="category-box PM-box">
                        <input className="check-box" type="checkbox" />
                        <i className="fa-solid fa-list-check PM icon"></i>
                        <p className="category-description">Project management</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div className="category-box SRM-box">
                        <input className="check-box" type="checkbox" />
                        <i className="fa-solid fa-arrow-trend-up SRM icon"></i>
                        <p className="category-description">Sales & CRM</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div className="category-box TM-box">
                        <input className="check-box" type="checkbox" />
                        <i className="fa-solid fa-check TM icon"></i>
                        <p className="category-description">Task management</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div className="category-box HR-box">
                        <input className="check-box" type="checkbox" />
                        <i className="fa-solid fa-grip-lines-vertical HR icon"></i>
                        <p className="category-description">HR</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div className="category-box OPR-box">
                        <input className="check-box" type="checkbox" />
                        <i className="fa-solid fa-gears OPR icon"></i>
                        <p className="category-description">Operations</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryBox;
