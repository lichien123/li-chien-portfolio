import './Projects.css';
import ShoppingCart from './ShoppingCart/ShoppingCart.js';
import SearchFilters from './SearchFilters/SearchFilters.js';
import ItemSummary from './ItemSummary/ItemSummary.js';

const Projects = () => {
    return (
        <div className="projects">

            <div className='main-title title black'>Projects</div>
            <div className='subtitle black'>Junior Frontend Developer/<br/>T. Rowe Price</div>
            <div className='title black'>New Account Setup</div>
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
            <div className='description'>I helped build and launch our three-year project, the New Account Setup Application, in its entirety.  On that team I helped increase unit test coverage by 60% as well as application finishes (our most important KPI) by 12%.</div>
            <button>View Project</button>

            <div className='subtitle black'>Junior Frontend Developer/<br/>T. Rowe Price</div>
            <div className='title black'>Account Access</div>
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
            <div className='description'> I honed my knowledge of best practices through debugging and enhancements, writing much cleaner and simpler code. Helped move the unit testing suite from Jest to React Testing Library. I also contributed to T. Rowe Price’s universal React component library and excelled at documentation and mentoring new hires.</div>
            <button>View Project</button>
            {/* <div className="title">Project #1</div>
            <div className='subtitle'>New Account Setup (NASU)</div>
            <div className='project'>
                <div className='text-body'>
                    <div className='paragraph'>NASU is the application at T. Rowe Price that helps customers open a new investing account.</div>
                    <div className='paragraph'>My role was to "modernize" the investing experience, making the process of opening a new account less of a headache. The goal was to break down financial and legal information into an accessible multi-page form.</div>
                    <div className='paragraph'>Here are some of the features I've worked on to help users digest information with ease.</div>
                </div>
                <ShoppingCart/>
                <SearchFilters/>
            </div>
            <div className="title">Project #2</div>
            <div className='subtitle'>Account Access (AA)</div>
            <div className='project'>
                <div className='text-body'>
                    <div className='paragraph'>AA is the application a user sees when they log in to their T. Rowe Price account.</div>
                    <div className='paragraph'>My role was to add new features and debug the existing site so users could understand the status of their accounts.</div>
                    <div className='paragraph'>Here are some of the features I've worked on.</div>
                </div>
                <ItemSummary/>
            </div> */}
        </div>
    );
};

export default Projects;