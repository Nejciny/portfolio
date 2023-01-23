import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
