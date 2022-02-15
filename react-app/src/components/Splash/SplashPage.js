import CategoryBox from "./CategoryBox";
import "./SplashPage.css";

function SplashPage() {

    const firefly = ['.1','.2','.3','.4','.5','.6']
    
    return (
        <>
            <div className="main-container">
                <div className="main-item-container">
                    <h1 className="splash-slogan">Work without limits</h1>
                    <p className="splash-context-text">What would you like to manage with D&C?</p>
                    <CategoryBox />
                    <button className="sign-up-btn">Get Started</button>
                </div>
                <div className="snowflakes" aria-hidden="true">
                {firefly.map( (e) => <div key={e} className="snowflake">✧</div>)}
                </div>
                
            </div>
        </>
    )
}

export default SplashPage;
