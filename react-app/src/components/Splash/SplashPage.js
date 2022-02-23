import CategoryBox from "./CategoryBox";
import { useHistory } from "react-router-dom";
import "./SplashPage.css";

function SplashPage() {
    const history = useHistory();
    const firefly = ['.1','.2','.3','.4','.5','.6']
    
    return (
        <>
            <div className="main-container">
                <div className="main-item-container">
                    <h1 className="splash-slogan">Work without limits</h1>
                    <p className="splash-context-text">What would you like to manage with D&C?</p>
                    <CategoryBox />
                    <button onClick={() => history.push('/sign-up')}className="sign-up-btn">Get Started</button>
                </div>
                <div className="snowflakes" aria-hidden="true">
                {firefly.map( (e) => <div key={e} className="snowflake">★</div>)}
                </div>
                
            </div>
        </>
    )
}

export default SplashPage;
