import React from 'react'
import "../home.css";
import Data from './Data';



function Home() {
  return (
    <section className='home section' id='home'>
        <div className="home_container container grid">
            <div className="home_content grid">
                <Data />
                <div className="home_img"> <img  src="../images/hero.svg" alt="" /></div>

            </div>
        </div>
    </section>
  )
}

export default Home