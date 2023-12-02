import React,{useRef} from 'react'
import "./Contact.css"
import FacebookIcon from "../../assets/facebook-icon.png"
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png"
import InstagramIcon from "../../assets/instagram.png"
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1r7gu6b', 'template_6ng83yi', form.current, 'CaKVFUYcJWmaAWPjB3FZL')
         .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
      <section id="contactPage">
          <div id="contact">
              <h1 className='contactPageTitle'>Contact Me</h1>
              <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
              <form className='contactForm' ref={form} onSubmit={sendEmail}>
                  
                  <input type="text" className="name" placeholder="Your Name" name='your_name' />
                  <input type="email" className="email" placeholder="Your Email"  name='your_email'/>
                  <textarea className='msg' name='message' rows='5' placeholder='your messgae' ></textarea>
                  <button type='submit' value="send" className='submitBtn'>Submit</button>
                  <div className="links">
                      <img src={FacebookIcon} alt="facebook" className="link" />
                      <img src={TwitterIcon} alt="twitter" className="link" />
                      <img src={YouTubeIcon} alt="youtube" className="link" />
                      <img src={InstagramIcon} alt="insta" className="link"/>
                  </div>
              </form>
          </div> 
      </section>
  )
}

export default Contact
