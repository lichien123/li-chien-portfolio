import './About.css'

import BioPic from '../../images/li-photo.jpeg';

const About = () => {
    return (
        <div className='about'>
          <div className='title black underline' id='skills'>My Skills</div>
          <div className='section'>
            <img src={BioPic} className='bio-pic' alt='a portrait of Li'/>
            <div className='writeup'>
              <ul className='tags'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Jest</li>
                <li>React Testing Library</li>
                <li>Figma</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Typescript</li>
                <li>Git</li>
                <li>SASS</li>
                <li>Responsive Web Design</li>
              </ul>
              <div className='subtitle'>I love building websites 📱</div>
              <div className='description'>Ever since I was three, I've been using the web. I've gone from feeding Neopets to tweaking audio effect racks in Ableton Live, creating chat automation to enhance music publicity, and as of 2018, I've fallen in love with developing web applications. React is my weapon of choice, and I've spent five years honing my skills in React and using it to contribute to multiple successful projects.</div>
            </div>
          </div>
        </div>
    );
};

export default About;