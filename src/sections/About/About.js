import './About.css'

import BioPic from '../../images/li-photo.jpeg';

const About = () => {
    return (
        <div className='about'>
          <div className='title black underline'>My Skills</div>
          <div className='section'>
            <img src={BioPic} className='bio-pic'/>
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
              <div className='description'>Ever since I was young I was interested in blah blah blah... Ever since I was young I was interested in blah blah blah... Ever since I was young I was interested in blah blah blah... Ever since I was young I was interested in blah blah blah...</div>
            </div>
          </div>
        </div>
    );
};

export default About;