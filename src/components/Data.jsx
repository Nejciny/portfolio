import React from 'react'
import Social from './Social'

function Data() {
  return (
    <div className="home_data">
        <h1 className='home_title'>Nejc Kovač</h1>

        {/* <h3 className='home_subtitle'> Web Developer</h3> */}

        <p className="home_description"> 
        Web developer who likes to create web applications and websites in his free time.
        </p>
        
        <Social />
    </div>
  )
  
}

export default Data