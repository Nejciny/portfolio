import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { useEffect } from 'react';




function App() {

  // ---------------------HERO MOUSE ANIMATION---------------------------------------

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    
    let hue = 1;
    
    
    const particleArray = [];
    
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 6 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = hue;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }
      draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle= "hsl("+this.color+",100%,50%)";
        ctx.fill();
    
      }
    }
    
    function init() {
      particleArray.push(new Particle(canvas.width, canvas.height));
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particleArray.forEach((particle, index) => {
        if (particle.size <= 0.2) {
          particleArray.splice(index, 1);
        } else {
          particle.update();
          particle.draw();
        }
      });
      requestAnimationFrame(animate);
    
      hue ++;
    
    }
    
    init();
    animate();


    let offset = 0;
    
    canvas.addEventListener('mousemove', function(event) {
      //  ON SCROLL: the offset is calculated and added to Y coordinate on MOUSE MOVE
      particleArray.push(new Particle(event.x, event.y + offset));
    });

    window.addEventListener('scroll',function(){
      offset = window.scrollY;
    });

    window.addEventListener('resize',function(){
      canvas.width = canvas.getBoundingClientRect().width;
      canvas.height = canvas.getBoundingClientRect().height;
    });


  },[]);


//----------------------------------------------------------------------------------------


  return (
    <div className="App">
      <Header />

      <div className="canvas_container">
      <Home />
      <Skills />
      <canvas id='canvas'></canvas>
      </div>

      
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
