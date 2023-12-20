import './App.css';

// import Menu from './Menu.js';
// import Socials from './sidebars/Socials.js';

import Home from './sections/Home/Home.js';
import About from './sections/About/About.js';
import Projects from './sections/Projects/Projects.js';
// import Skills from './sections/Skills/Skills.js';
import Contact from './sections/Contact/Contact.js';


function App() {
  return (
    <div className="App">

      <header className="columns">
        {/* <div className='left-column'>
          <div className='name'>Li Chien</div>
          <Socials/>
        </div> */}
        <div className='center-column'>
          {/* <Menu/> */}
          <Home/>
          <About/>
          <Projects/>
          {/* <Skills/> */}
          <Contact/>
        </div>
        {/* <div className='right-column'>
          <Menu/>
        </div> */}
      </header>

    </div>
  );
}

export default App;
