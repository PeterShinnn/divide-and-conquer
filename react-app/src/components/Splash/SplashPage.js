import "./SplashPage.css";

function SplashPage() {

    const firefly = ['.1','.2','.3','.4','.5','.6']
    //const category = ["Creative & design", "IT", "Software development", "Marketing", "Project management", "Sales & CRM", "Task management", "HR", "Operations"]

    // CREATE DESIGN <i class="fa-solid fa-chalkboard-user"></i>
    // IT <i class="fa-solid fa-sliders"></i>
    // CODE <i class="fa-solid fa-code"></i>
    // MARKETING <i class="fa-solid fa-bullhorn"></i>
    // Project Mang <i class="fa-solid fa-list-check"></i>
    // SALES <i class="fa-solid fa-arrow-trend-up"></i>
    // Task Mang <i class="fa-solid fa-check"></i>
    // HR <i class="fa-solid fa-grip-lines-vertical"></i>
    // OPERATIONS <i class="fa-solid fa-gears"></i>
    return (
        <>
            <div className="main-container">
                <div className="main-item-container">
                    <h1>Work without limits</h1>
                    <h2>What would you like to manage</h2>
                    {/* create category box here */}
                    <button>Get Started</button>
                </div>
                <div className="snowflakes" aria-hidden="true">
                {firefly.map( (e) => <div key={e} className="snowflake">✧</div>)}
                </div>
                
            </div>
        </>
    )
}

export default SplashPage;
