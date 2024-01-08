import './Projects.css';

const navigateToProject = (path) => {
    return window.location.pathname = path;
}

const Projects = () => {
    return (
        <div className="projects">

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
            <div className='description'>Helped build this project from development to launch. Created many reusable components and screens with an emphasis on modern design. Individually built some sections of the application and pair programmed others. By launch, our new, modern version of the application had seen an increase in "application finishes" of 12% as opposed to the legacy application.</div>
            <button onClick={() => navigateToProject('/nasu')}>View Project</button>

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
    );
};

export default Projects;