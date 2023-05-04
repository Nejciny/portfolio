import React from 'react'
import { useState } from 'react';
import "../header.css";

function Header() {



    // ShowMenu si spremenu v setToggle
    const [Toggle, setToggle ] = useState(false);



  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="#home" className='nav_logo'> Kovač</a>

            <div className={Toggle? "nav_menu show_menu" : "nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_item">
                        <a href="#home" className="nav_link">
                            <i class="fa-solid fa-house nav_icon"></i> 
                            Home
                        </a>
                    </li>


                    <li className="nav_item">
                        <a href="#skills" className="nav_link">
                            <i class="fa-solid fa-file-lines nav_icon"></i>
                            Skills
                        </a>
                    </li>


                    <li className="nav_item">
                        <a href="#projects" className="nav_link">
                            <i class="fa-solid fa-image nav_icon" nav_icon></i>
                            Projects
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                        <i class="fa-solid fa-address-book nav_icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>

                <i class="fa-solid fa-xmark nav_close nav_icon" onClick={() => setToggle(false)}></i>
            </div>

            <div className="nav_toggle" onClick={() => setToggle(true)}>
                <i class="fa-solid fa-list nav_icon"></i>
            </div>

        </nav>
    </header>
  )
}

export default Header