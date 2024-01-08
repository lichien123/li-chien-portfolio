import './App.css';

import Home from '../sections/Home/Home.js';
import About from '../sections/About/About.js';
import Projects from '../sections/Projects/Projects.js';
import Contact from '../sections/Contact/Contact.js';
import Footer from '../sections/Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;