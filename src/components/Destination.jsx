import React, { useState } from "react";
import { Header, HeadSpan } from "./Header";
import destinations from '../data/destination.json';
import '../stylesheets/Destination.css';

function Destination( { setActiveLink } ) {
    const moon = destinations.destinations[0];
    const mars = destinations.destinations[1];
    const europa = destinations.destinations[2];
    const titan = destinations.destinations[3];

    const [currentDest, setCurrentDest] = useState(moon);

    const selectDest = (destination) => {
        switch (destination) {
            case 'Moon':
                setCurrentDest(moon);
                break;
            case 'Mars':
                setCurrentDest(mars);
                break;
            case 'Europa':
                setCurrentDest(europa);
                break;
            case 'Titan':
                setCurrentDest(titan);
                break;
            default:
                setCurrentDest(moon);
        }
    };

    return (
        <section className="dest-page">
            <div className="dest-img">
                <Header><HeadSpan>01</HeadSpan> PICK YOUR DESTINATION</Header>
                <img src={currentDest.images.png} alt={currentDest.name} onClick={() => setActiveLink('Crew')} />
            </div>
            <div className="dest-info">
                <nav className="dest-links">
                    <ul>
                        <li>
                            <a onClick={() => selectDest('Moon')} className={ currentDest == moon ? 'active-dest-link' : '' } >MOON</a>
                        </li>
                        <li>
                            <a onClick={() => selectDest('Mars')} className={ currentDest == mars ? 'active-dest-link' : '' } >MARS</a>
                        </li>
                        <li>
                            <a onClick={() => selectDest('Europa')} className={ currentDest == europa ? 'active-dest-link' : '' } >EUROPA</a>
                        </li>
                        <li>
                            <a onClick={() => selectDest('Titan')} className={ currentDest == titan ? 'active-dest-link' : '' } >TITAN</a>
                        </li>
                    </ul>
                </nav>
                <p className="dest-title">{currentDest.name.toUpperCase()}</p>
                <p className="dest-description">{currentDest.description}</p>
                <hr />
                <div className="info-panel">
                    <div className="info">
                        <p className="info-title">AVG. DISTANCE</p>
                        <p className="info-details">{currentDest.distance}</p>
                    </div>
                    <div className="info">
                        <p className="info-title">EST. TRAVEL TIME</p>
                        <p className="info-details">{currentDest.travel}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Destination;