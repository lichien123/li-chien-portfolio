// import './About.css'
import Socials from '../../sidebars/Socials';

const Contact = () => {
    return (
        <div className='contact center-content'>
          <div className='title'>Want to get in touch?</div>
          <div className='subtitle'>Drop me a line and I'll get back to you shortly.</div>
          <div className='text-body'>
            <Socials/>
          </div>
        </div>
    );
};

export default Contact;