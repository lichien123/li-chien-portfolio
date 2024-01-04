import './Socials.css';

import GitHubLogo from '../images/github-orange.svg';
import LinkedInLogo from '../images/linkedin-orange.svg';
import InstagramLogo from '../images/instagram-orange.svg';

const Socials = () => {
    return (
        <ul className="socials">
          <li className='social-logo'>
            <a href='https://github.com/lichien123' target='_blank' rel="noreferrer">
              <img src={GitHubLogo}/>
            </a>
          </li>
          <li className='social-logo'>
            <a href='https://www.linkedin.com/in/li-chien-163617b1' target='_blank' rel="noreferrer">
              <img src={LinkedInLogo}/>
            </a>
          </li>
          <li className='social-logo'>
            <a href='https://www.instagram.com/munchiibruh' target='_blank' rel="noreferrer">
              <img src={InstagramLogo}/>
            </a>
          </li>
        </ul>
    )
}

export default Socials;