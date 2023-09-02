import React from "react";
import moon from '../assets/destination/image-moon.png'
import '../stylesheets/Destination.css'

function Destination() {

    return (
        <section className="dest-page">
            <div className="dest-img">
                <p><span>01</span> PICK YOUR DESTINATION</p>
                <img src={moon} />
            </div>
            <div className="dest-info">
                <nav className="dest-links">
                    <ul>
                        <li>
                            <a>MOON</a>
                        </li>
                        <li>
                            <a>MARS</a>
                        </li>
                        <li>
                            <a>EUROPA</a>
                        </li>
                        <li>
                            <a>TITAN</a>
                        </li>
                    </ul>
                </nav>
                <p className="dest-title">MOON</p>
                <p className="dest-description">
                See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <hr />
                <div className="info-panel">
                    <div className="info">
                        <p className="info-title">AVG. DISTANCE</p>
                        <p className="info-details">384,400 KM</p>
                    </div>
                    <div className="info">
                        <p className="info-title">EST. TRAVEL TIME</p>
                        <p className="info-details">3 DAYS</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Destination;