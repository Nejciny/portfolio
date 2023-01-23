import React from 'react'
import resume from  "../resume.pdf"

function Social() {
  return (
    <div className="home_social">
        <a href="https://www.linkedin.com/in/nejc-kova%C4%8D-82542b254/" className="home_social-icon" target="_blank"> 
            <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Nejciny" className="home_social-icon" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>


        <a href={resume} download="Nejc_Kovač" className='cv' > Download CV</a>
    </div>
  )
}

export default Social