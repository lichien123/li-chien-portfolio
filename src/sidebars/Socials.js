import './Socials.css';

// import LinkedInLogo from '../images/linkedin-white.svg';

const Socials = () => {
    return (
        <ul className="socials">
          <li>
            <a href='https://www.linkedin.com/in/li-chien-163617b1' target='_blank' rel="noreferrer">
              {/* <img src={LinkedInLogo} className='socials-logo'/> */}
              <i class="fa-brands fa-linkedin fa-beat" style={{"color": "#ffffff"}}></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/li-chien-163617b1' target='_blank' rel="noreferrer">
              {/* <img src={LinkedInLogo} className='socials-logo'/> */}
            </a>
          </li>
        </ul>
    )
}

export default Socials;