import React from 'react'
import "../projects.css";

function Projects() {
  return (
    <div className="projects" id='projects'>
    <div className=' container' >
    <h1 className='projects-title'>Projects</h1>

    <div className="projects-container">

        <div className="project">
            <h2> Shop App</h2>

            <div className="text shop_app">
                <p> </p>
            </div>

            <div className="btns">
                <a href="https://github.com/Nejciny/shop-app">Github</a>
                <a href="https://nejckovac-shop-app.netlify.app/">Demo</a>
            </div>
        </div>

        <div className="project ">
            <h2> Library App</h2>

            <div className="text library_demo">
                <p> </p>
            </div>

            <div className="btns">
                <a href="https://github.com/Nejciny/Library-App">Github</a>
                <a href="https://nejckovac-library-app.netlify.app">Demo</a>
            </div>
        </div>


        <div className="project">
            <h2> Note App</h2>

            <div className="text note_app_demo">
                <p> </p>
            </div>

            <div className="btns">
                <a href="https://github.com/Nejciny/note_app">Github</a>
                <a href="https://nejckovac-note-app.netlify.app">Demo</a>
            </div>
        </div>

        <div className="project">
            <h2> Boxy game</h2>

            <div className="text boxy_game_demo">
                <p> </p>
            </div>

            <div className="btns">
                <a href="https://github.com/Nejciny/Boxy_game">Github</a>
                <a href="https://nejciny.github.io/Boxy_game/">Demo</a>
            </div>
        </div>
        <div className="project">
            <h2> Random Website</h2>

            <div className="text random_website_demo">
                <p> </p>
            </div>

            <div className="btns">
                <a href="https://github.com/Nejciny/random-website.github.io">Github</a>
                <a href="https://nejciny.github.io/random-website.github.io/">Demo</a>
            </div>
        </div>
        <div className="project">
            <h2> Library PHP project</h2>

            <div className="text library_php">
                <p> .</p>
            </div>

            <div className="btns">
                <a href="https://github.com/Nejciny/Findans_library_PHP_project">Github</a>
            </div>
        </div>



    </div>
    </div>
    </div>
  )
}

export default Projects;