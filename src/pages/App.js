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
      <div className='content'>
        <About/>
        <Projects/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;