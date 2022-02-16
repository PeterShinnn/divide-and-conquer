import React, { useState } from 'react';

function CategoryBox() {

    const [checkedCD, setCheckedCD] = useState(false);
    const [checkedIT, setCheckedIT] = useState(false);
    const [checkedSD, setCheckedSD] = useState(false);
    const [checkedMX, setCheckedMX] = useState(false);
    const [checkedPM, setCheckedPM] = useState(false);
    const [checkedSRM, setCheckedSRM] = useState(false);
    const [checkedTM, setCheckedTM] = useState(false);
    const [checkedHR, setCheckedHR] = useState(false);
    const [checkedOPR, setCheckedOPR] = useState(false);

    // const toggleClass = (target, className) => {
    //     if (target.className.includes(className)){
    //         let result = target.className.replace(className, '')
    //         target.className = result
    //     } else {
    //         target.className += ` ${className}`
    //     }
    // }
    
    const handleClickCD = (e) => checkedCD ? setCheckedCD(false) : setCheckedCD(true)
    const handleClickIT = (e) => checkedIT ? setCheckedIT(false) : setCheckedIT(true)
    const handleClickSD = (e) => checkedSD ? setCheckedSD(false) : setCheckedSD(true)
    const handleClickMX = (e) => checkedMX ? setCheckedMX(false) : setCheckedMX(true)
    const handleClickPM = (e) => checkedPM ? setCheckedPM(false) : setCheckedPM(true)
    const handleClickSRM = (e) => checkedSRM ? setCheckedSRM(false) : setCheckedSRM(true)
    const handleClickTM = (e) => checkedTM ? setCheckedTM(false) : setCheckedTM(true)
    const handleClickHR = (e) => checkedHR ? setCheckedHR(false) : setCheckedHR(true)
    const handleClickOPR = (e) => checkedOPR ? setCheckedOPR(false) : setCheckedOPR(true)
    
    return (
        <>
            <div className="category-container">
                <div className="category-box-container">
                    <div onClick={()=>handleClickCD()} className="category-box CD-box">
                        <input className="check-box" type="checkbox" checked={checkedCD} onChange={() => console.log()}/>
                        <i className="fa-solid fa-chalkboard-user CD icon"></i>
                        <p className="category-description">Creative & design</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickIT()} className="category-box IT-box">
                        <input className="check-box" type="checkbox" checked={checkedIT} onChange={() => console.log()}/>
                        <i className="fa-solid fa-sliders IT icon"></i>
                        <p className="category-description">IT</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickSD()} className="category-box SD-box">
                        <input className="check-box" type="checkbox" checked={checkedSD} onChange={() => console.log()}/>
                        <i className="fa-solid fa-code SD icon"></i>
                        <p className="category-description">Software Development</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickMX()} className="category-box MK-box">
                        <input className="check-box" type="checkbox" checked={checkedMX} onChange={() => console.log()}/>
                        <i className="fa-solid fa-list-check MK icon"></i>
                        <p className="category-description">Marketing</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickPM()} className="category-box PM-box">
                        <input className="check-box" type="checkbox" checked={checkedPM} onChange={() => console.log()}/>
                        <i className="fa-solid fa-list-check PM icon"></i>
                        <p className="category-description">Project management</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickSRM()} className="category-box SRM-box">
                        <input className="check-box" type="checkbox" checked={checkedSRM} onChange={() => console.log()}/>
                        <i className="fa-solid fa-arrow-trend-up SRM icon"></i>
                        <p className="category-description">Sales & CRM</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickTM()} className="category-box TM-box">
                        <input className="check-box" type="checkbox" checked={checkedTM} onChange={() => console.log()}/>
                        <i className="fa-solid fa-check TM icon"></i>
                        <p className="category-description">Task management</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickHR()} className="category-box HR-box">
                        <input className="check-box" type="checkbox" checked={checkedHR} onChange={() => console.log()}/>
                        <i className="fa-solid fa-grip-lines-vertical HR icon"></i>
                        <p className="category-description">HR</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickOPR()} className="category-box OPR-box">
                        <input className="check-box" type="checkbox" checked={checkedOPR} onChange={() => console.log()}/>
                        <i className="fa-solid fa-gears OPR icon"></i>
                        <p className="category-description">Operations</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryBox;
