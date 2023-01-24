import React from 'react'
import "../skills.css";

import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';


function Skills() {
  return (
    <div className='skills_container container' id='skills'>




      <h1 >Skills </h1>
      
      <div className="content">
          <div className="skills">

            <div className="skill">
              <div className="skill_logo">
              <img src="../images/html5-icon.svg" alt="" />
              </div>

              <p className="skill_title"> HTML</p>
            </div>

            <div className="skill">
              <div className="skill_logo">
              <img src="../images/css-icon.svg" alt="" />
              </div>
              <p className="skill_title"> CSS</p>
            </div>



            <div className="skill">
              <div className="skill_logo">
              <img src="../images/logo-javascript.svg" alt="" />
              </div>
              <p className="skill_title"> Javascript</p>
            </div>

            <div className="skill">
              <div className="skill_logo">
              <img src="../images/react-2.svg" alt="" />
              </div>
              <p className="skill_title"> React</p>
            </div>

            <div className="skill">
              <div className="skill_logo">
                <img src="../images/wordpress-logo.svg" alt="" />
              </div>
              <p className="skill_title"> Wordpress</p>
            </div>

            <div className="skill">
              <div className="skill_logo">
              <img src="../images/python-5.svg" alt="" />
              </div>
              <p className="skill_title"> Python</p>
            </div>

            <div className="skill">
              <div className="skill_logo">
              <img src="../images/php-1.svg" alt="" />
              </div>
              <p className="skill_title"> PHP</p>
            </div>

            <div className="skill">
              <div className="skill_logo">
                <img src="../images/mysql.svg" alt="" />
              </div>
              <p className="skill_title"> MySQL</p>
            </div>


      </div>
      </div>

    </div>
  )
}



export default Skills