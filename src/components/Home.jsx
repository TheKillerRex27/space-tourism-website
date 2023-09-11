import React from "react";
import explore from '../assets/explore.svg'
import '../styles/Home.css'

function Home({ setActiveLink }) {

    return (
        <section className='home-page'>
            <div className='home-text'>
                <p className='text-1'>
                    SO, YOU WANT TO TRAVEL TO
                </p>
                <p className='text-2'>
                    SPACE
                </p>
                <p className='text-3'>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className='img-section'>
                <img className='home-img' src={explore} onClick={() => setActiveLink('Destination')} />
            </div>
        </section>
    )

}

export default Home;