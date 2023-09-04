import React, { useState } from "react";
import '../stylesheets/Crew.css'
import crew from '../data/crew.json'

function Crew() {

    const douglas = crew.crew[0];
    const mark = crew.crew[1];
    const victor = crew.crew[2];
    const anousheh = crew.crew[3];

    const [currentCrew, setCurrentCrew] = useState(douglas);

    const selectCrew = (crew) => {
        switch (crew) {
            case 'Douglas':
                setCurrentCrew(douglas);
                break;
            case 'Mark':
                setCurrentCrew(mark);
                break;
            case 'Victor':
                setCurrentCrew(victor);
                break;
            case 'Anousheh':
                setCurrentCrew(anousheh);
                break;
            default:
                setCurrentCrew(douglas);
        }
    };

    return (
        <section className="crew-page">
            <div className="crew-details">
                <p className="header"><span>02</span> MEET YOUR CREW</p>
                <div className="crew-info">
                    <p className="crew-title">{currentCrew.role.toUpperCase()}</p>
                    <p className="crew-name">{currentCrew.name.toUpperCase()}</p>
                    <p className="crew-text">{currentCrew.bio}</p>
                </div>
                <div className="crew-nav">
                    <div className={currentCrew === douglas ? 'active-button' : 'crew-nav-button'} onClick={() => selectCrew('Douglas')}></div>
                    <div className={currentCrew === mark ? 'active-button' : 'crew-nav-button'} onClick={() => selectCrew('Mark')}></div>
                    <div className={currentCrew === victor ? 'active-button' : 'crew-nav-button'} onClick={() => selectCrew('Victor')}></div>
                    <div className={currentCrew === anousheh ? 'active-button' : 'crew-nav-button'} onClick={() => selectCrew('Anousheh')}></div>
                </div>
            </div>
            <div className="crew-img-section">
                <img src={currentCrew.images.png} className="crew-img" />
            </div>
        </section>
    )

}

export default Crew;