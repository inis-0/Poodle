// components/EventFooter.js
import React, {useEffect} from 'react';


function EventFooter({page, setPage}) {

    const onClickPage = (pageInfo) => {
        setPage(pageInfo)
    };

    useEffect(() => {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach((clickedTab) => {
            clickedTab.addEventListener('click', () => {
                tabs.forEach((tab => {
                    tab.classList.remove("active");
                }))
                clickedTab.classList.add("active");
                const clickedTabBGColor = getComputedStyle
                (clickedTab).getPropertyValue(
                    "color"
                );
                document.body.style.background = clickedTabBGColor;
            });
        });
    }, []);


    return (<>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
            <div className='poodle-footer'>
                <div className="tab-nav-container">
                    <div className="tab active purple" onClick={()=>{onClickPage('HOME')}}>
                        <i className="fas fa-home"></i>
                        <p>HOME</p>
                    </div>
                    <div className="tab pink" onClick={()=>{onClickPage('BRIDGE')}}>
                        <i className="fa-solid fa-bridge"></i>
                        <p>BRIDGE</p>
                    </div>
                    <div className="tab yellow" onClick={()=>{onClickPage('STAKING')}}>
                        <i className="fa-solid fa-piggy-bank"></i>
                        <p>STAKING</p>
                    </div>
                    <div className="tab teal" onClick={()=>{onClickPage('GAME')}}>
                        <i className="fa-solid fa-gamepad"></i>
                        <p>GAME</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventFooter;
