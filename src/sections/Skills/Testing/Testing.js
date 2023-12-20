import jestIcon from '../../../images/jest.png'
import enzymeIcon from '../../../images/enzyme.png'
import reactTestingLibraryIcon from '../../../images/react-testing-library.png'

const Languages = () => {
    return (
        <div className="skills-content">
            <div className="subtitle">Testing Tools</div>
            <div className='skill-list'>
                <div className='row'>
                    <div className='skill'>
                        <div className='subtitle'>Jest</div>
                        <img src={jestIcon} className="icon" alt="logo" />
                    </div>
                    <div className='skill'>
                        <div className='subtitle'>Enzyme</div>
                        <img src={enzymeIcon} className="icon" alt="logo" />
                    </div>
                </div>
                <div className='row'>
                    <div className='skill'>
                        <div className='subtitle'>React Testing Library</div>
                        <img src={reactTestingLibraryIcon} className="icon" alt="logo" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Languages;