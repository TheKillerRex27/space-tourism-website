import React from "react";
import '../stylesheets/Crew.css'
import commander from '../assets/crew/image-douglas-hurley.png'

function Crew() {

    return (
        <section className="crew-page">
            <div className="crew-details">
                <p className="header"><span>02</span> MEET YOUR CREW</p>
                <div className="crew-info">
                    <p className="crew-title">COMMANDER</p>
                    <p className="crew-name">DOUGLAS HURLEY</p>
                    <p className="crew-text">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
                <div className="crew-nav">
                    <div className="crew-nav-button active-button"></div>
                    <div className="crew-nav-button"></div>
                    <div className="crew-nav-button"></div>
                    <div className="crew-nav-button"></div>
                </div>
            </div>
            <div className="crew-img-section">
                <img src={commander} className="crew-img" />
            </div>
        </section>
    )

}

export default Crew;