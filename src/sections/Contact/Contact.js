import './Contact.css'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
          <div className='title underline'>Want to get in contact?</div>
          <div className='description'>Feel free to send me an email and I'll get back to you shortly.</div>
          <a className='email' href="mailto:lichien123coding@gmail.com">lichien123coding@gmail.com</a>
        </div>
    );
};

export default Contact;