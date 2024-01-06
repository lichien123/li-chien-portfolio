import './Contact.css'
import Socials from '../../sidebars/Socials';

const Contact = () => {
    return (
        <div className='contact'>
          <div className='title underline'>Want to get in touch?</div>
          <div className='description'>Drop me a line and I'll get back to you shortly.</div>
          <div className='email'>lichien123coding@gmail.com</div>
          {/* <div className='text-body'>
            <Socials/>
          </div> */}
        </div>
    );
};

export default Contact;