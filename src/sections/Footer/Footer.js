import './Footer.css'
import Socials from '../../components/Socials';
import Menu from '../../components/Menu';

const Footer = () => {
    return (
        <div className='footer'>
          <div className='section'>
            <div className='author'>Li Chien</div>
            <div className='copyright'>Built by Li Chien</div>
          </div>
          <div className='section'>
            <div className='subtitle'>Links</div>
            <Menu menuClassName='footer-menu' />
          </div>
          <div className='section'>
            <div className='subtitle'>Get in touch</div>
            <Socials/>
          </div>
        </div>
    );
};

export default Footer;