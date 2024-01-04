import './Footer.css'
import Socials from '../../sidebars/Socials';

const Footer = () => {
    return (
        <div className='footer'>
          <div className='section'>
            <div className='name'>Li Chien</div>
            <div className='copyright'>Built and designed by Li Chien</div>
          </div>
          <div className='section'>
            <div className='subtitle'>Links</div>
            <div className='links'>
                <div className='link-item'>Home</div>
                <div className='link-item'>About</div>
                <div className='link-item'>Projects</div>
                <div className='link-item'>Contact</div>
            </div>
          </div>
          <div className='section'>
            <div className='subtitle'>Get in touch</div>
            <Socials/>
          </div>
        </div>
    );
};

export default Footer;