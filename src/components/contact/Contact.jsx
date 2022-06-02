import React, {useRef} from 'react'
import './contact.css'
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nqnl7tb', 'template_s8mwtsi', form.current, 'xFKwr2WZHejwqHKWN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' required placeholder='You Fulll Name'/>
          <input type="email" name="email" required placeholder='Your Email' />
          <textarea name="message" id="" rows="7" required placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
