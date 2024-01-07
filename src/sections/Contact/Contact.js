import './Contact.css'
import Socials from '../../sidebars/Socials';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
          <div className='title underline'>Want to get in contact?</div>
          <div className='description'>Feel free to send me an email and I'll get back to you shortly.</div>
          <div className='email'>lichien123coding@gmail.com</div>
          {/* <div className='text-body'>
            <Socials/>
          </div> */}
        </div>
    );
};

export default Contact;