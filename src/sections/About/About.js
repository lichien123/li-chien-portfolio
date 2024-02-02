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
              <div className='subtitle'>I love technology 📱</div>
              <div className='description'>After a lifetime of schooling peers in Super Smash Bros, producing electronic music with 100k+ streams and developing enterprise applications for T. Rowe Price, I can say one thing for sure - I love solving the challenges that technology presents today. We are living in an era where anyone can create a revolutionary platform, and frankly, that's exciting! Anyone can go for their dreams and I truly believe that.</div>
              {/* <a href='#projects' className='bio-link'>Click here to see what I'm working on right now!</a> */}
            </div>
          </div>
        </div>
    );
};

export default About;