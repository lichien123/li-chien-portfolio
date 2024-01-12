import './Projects.css';
import NASUChoosePath from '../../images/nasu-byop.png';
import AAChart from '../../images/aa-performance-chart.png';

const navigateToProject = (path) => {
    return window.location.pathname = path;
}

const Projects = () => {
    return (
        <div className='projects'>

            <div className='project'>
                <div className='blurb'>
                    <div className='main-title title black underline' id='projects'>Projects</div>
                    <div className='subtitle black'>Junior Frontend Developer/<br/>T. Rowe Price</div>
                    <div className='project-title black'>New Account Setup</div>
                    <ul className='tags'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Jest</li>
                        <li>Figma</li>
                        <li>Typescript</li>
                        <li>Git</li>
                        <li>SASS</li>
                        <li>Responsive Web Design</li>
                    </ul>
                    <div className='description'>Helped build this project from development to launch. Components were designed to consolidate investment jargon into digestible sections of information. Setting up an investment account is no longer a headache!</div>
                    <button onClick={() => navigateToProject('/nasu')}>View Project</button>
                </div>
                <div className='image-container'>
                    <img src={NASUChoosePath} alt='a screen in New Account Setup' className='screenshot' onClick={() => navigateToProject('/nasu')} />
                </div>
            </div>

            <div className='project'>
                <div className='blurb'>
                    <div className='subtitle black'>Junior Frontend Developer/<br/>T. Rowe Price</div>
                    <div className='project-title black'>Account Access</div>
                    <ul className='tags'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>React Testing Library</li>
                        <li>Responsive Web Design</li>
                        <li>Figma</li>
                        <li>Git</li>
                    </ul>
                    <div className='description'>Maintained, debugged and enhanced the user dashboard. Enhancements focused on making the UI visually and functionally cleaner for those with minimal investment knowledge.</div>
                    <button onClick={() => navigateToProject('/account-access')}>View Project</button>
                </div>
                <div className='image-container'>
                    <img src={AAChart} alt='a screen in New Account Setup' className='screenshot' onClick={() => navigateToProject('/account-access')} />
                </div>
            </div>
        </div>
    );
};

export default Projects;