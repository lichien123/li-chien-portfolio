import githubIcon from '../../../images/github.png'
import gitlabIcon from '../../../images/gitlab.png'

const VersionControl = () => {
    return (
        <div className="skills-content">
            <div className="subtitle">Version Control</div>
            <div className='skill-list'>
                <div className='row'>
                    <div className='skill'>
                        <div className='subtitle'>GitHub</div>
                        <img src={githubIcon} className="icon" alt="logo" />
                    </div>
                    <div className='skill'>
                        <div className='subtitle'>GitLab</div>
                        <img src={gitlabIcon} className="icon" alt="logo" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default VersionControl;