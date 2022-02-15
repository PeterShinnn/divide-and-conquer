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

    const handleClickCD = () => checkedCD ? setCheckedCD(false) : setCheckedCD(true)
    const handleClickIT = () => checkedIT ? setCheckedIT(false) : setCheckedIT(true)
    const handleClickSD = () => checkedSD ? setCheckedSD(false) : setCheckedSD(true)
    const handleClickMX = () => checkedMX ? setCheckedMX(false) : setCheckedMX(true)
    const handleClickPM = () => checkedPM ? setCheckedPM(false) : setCheckedPM(true)
    const handleClickSRM = () => checkedSRM ? setCheckedSRM(false) : setCheckedSRM(true)
    const handleClickTM = () => checkedTM ? setCheckedTM(false) : setCheckedTM(true)
    const handleClickHR = () => checkedHR ? setCheckedHR(false) : setCheckedHR(true)
    const handleClickOPR = () => checkedOPR ? setCheckedOPR(false) : setCheckedOPR(true)

    return (
        <>
            <div className="category-container">
                <div className="category-box-container">
                    <div onClick={()=>handleClickCD()} className="category-box CD-box">
                        <input className="check-box" type="checkbox" checked={checkedCD}/>
                        <i className="fa-solid fa-chalkboard-user CD icon"></i>
                        <p className="category-description">Creative & design</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickIT()} className="category-box IT-box">
                        <input className="check-box" type="checkbox" checked={checkedIT}/>
                        <i className="fa-solid fa-sliders IT icon"></i>
                        <p className="category-description">IT</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickSD()} className="category-box SD-box">
                        <input className="check-box" type="checkbox" checked={checkedSD}/>
                        <i className="fa-solid fa-code SD icon"></i>
                        <p className="category-description">Software Development</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickMX()} className="category-box MK-box">
                        <input className="check-box" type="checkbox" checked={checkedMX}/>
                        <i className="fa-solid fa-list-check MK icon"></i>
                        <p className="category-description">Marketing</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickPM()} className="category-box PM-box">
                        <input className="check-box" type="checkbox" checked={checkedPM}/>
                        <i className="fa-solid fa-list-check PM icon"></i>
                        <p className="category-description">Project management</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickSRM()} className="category-box SRM-box">
                        <input className="check-box" type="checkbox" checked={checkedSRM}/>
                        <i className="fa-solid fa-arrow-trend-up SRM icon"></i>
                        <p className="category-description">Sales & CRM</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickTM()} className="category-box TM-box">
                        <input className="check-box" type="checkbox" checked={checkedTM}/>
                        <i className="fa-solid fa-check TM icon"></i>
                        <p className="category-description">Task management</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickHR()} className="category-box HR-box">
                        <input className="check-box" type="checkbox" checked={checkedHR}/>
                        <i className="fa-solid fa-grip-lines-vertical HR icon"></i>
                        <p className="category-description">HR</p>
                    </div>
                </div>
                <div className="category-box-container">
                    <div onClick={()=>handleClickOPR()} className="category-box OPR-box">
                        <input className="check-box" type="checkbox" checked={checkedOPR}/>
                        <i className="fa-solid fa-gears OPR icon"></i>
                        <p className="category-description">Operations</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryBox;
