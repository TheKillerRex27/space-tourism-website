import React, { useState } from "react";
import { Header, HeadSpan } from "./styled-components/Header";
import '../styles/Technology.css'
import tech from '../data/technology.json'

function Technology() {

    const launch = tech.technology[0]
    const spaceport = tech.technology[1]
    const capsule = tech.technology[2]

    const [currentTech, setCurrentTech] = useState(launch);

    const selectTech = (technology) => {
        switch (technology) {
            case 'Launch':
                setCurrentTech(launch);
                break;
            case 'Spaceport':
                setCurrentTech(spaceport);
                break;
            case 'Capsule':
                setCurrentTech(capsule);
                break;
            default:
                setCurrentTech(launch);
        }
    };

    return (
        <section className="tech-page">
            <div className="tech-info-wrapper">
                <Header><HeadSpan>03</HeadSpan> SPACE LAUNCH 101</Header>
                <div className="tech-info">
                    <div className="nav-buttons">
                        <div className={ currentTech == launch ? "active-nav-button" : "" } onClick={() => selectTech('Launch')} ><p>1</p></div>
                        <div className={ currentTech == spaceport ? "active-nav-button" : "" } onClick={() => selectTech('Spaceport')} ><p>2</p></div>
                        <div className={ currentTech == capsule ? "active-nav-button" : "" } onClick={() => selectTech('Capsule')} ><p>3</p></div>
                    </div>
                    <div>
                        <p className="tech-header">THE TERMINOLOGY...</p>
                        <p className="tech-title">{currentTech.name.toUpperCase()}</p>
                        <p className="tech-desc">{currentTech.description}</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={currentTech.images.portrait} className="tech-img" />
            </div>
        </section>
    )

}

export default Technology;