import './Projects.css';
import ShoppingCart from './ShoppingCart/ShoppingCart.js';
import SearchFilters from './SearchFilters/SearchFilters.js';
import ItemSummary from './ItemSummary/ItemSummary.js';

const Projects = () => {
    return (
        <div className="projects center-content">
            <div className="title">Project #1</div>
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
            </div>
        </div>
    );
};

export default Projects;