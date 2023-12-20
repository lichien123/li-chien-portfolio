import './Skills.css'

import Languages from './Languages/Languages.js';
import Testing from './Testing/Testing.js';
import VersionControl from './VersionControl/VersionControl.js';
import NonProgramming from './NonProgramming/NonProgramming.js';
import Strengths from './Strengths/Strengths.js';

const Skills = () => {
    return (
        <div className='skills center-content'>
            <div className='title'>How did I get these projects done?</div>
            <div className='subtitle'>Here are the technologies I used.</div>
            <div>
                <Languages/>
                <Testing/>
                <VersionControl/>
                <NonProgramming/>
                <Strengths/>
            </div>
        </div>
    );
};

export default Skills;