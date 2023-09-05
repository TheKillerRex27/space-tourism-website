import React from "react";
import { Header, HeadSpan } from "./styled-components/Header";
import '../stylesheets/Technology.css'
import rocket from '../assets/technology/image-launch-vehicle-portrait.jpg'

function Technology() {

    return (
        <section className="tech-page">
            <div className="tech-info-wrapper">
                <Header><HeadSpan>03</HeadSpan> SPACE LAUNCH 101</Header>
                <div className="tech-info">
                    <div className="nav-buttons">
                        <div className="active-nav-button"><p>1</p></div>
                        <div><p>2</p></div>
                        <div><p>3</p></div>
                    </div>
                    <div>
                        <p className="tech-header">THE TERMINOLOGY...</p>
                        <p className="tech-title">LAUNCH VEHICLE</p>
                        <p className="tech-desc">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={rocket} className="tech-img" />
            </div>
        </section>
    )

}

export default Technology;