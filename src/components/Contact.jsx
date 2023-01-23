import React from 'react'
import "../contact.css";
import { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bo3s1fq', 'template_dtceju8', form.current, 'W5EkoyNBHpcZA2JJ3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      let popup = document.getElementById("popup");
      let popup_container = document.getElementById("popup_container");
  
      popup.classList.remove("closed");
      popup_container.classList.remove("closed");

      e.target.reset();
  };

  function close_popup(){
    let popup = document.getElementById("popup");
    let popup_container = document.getElementById("popup_container");

    popup.classList.add("closed");
    popup_container.classList.add("closed");
  }



  return (
    <section id='contact' className="container contact">

    <div class="animation-container">
            <div class="moon">
                <div class="crater crater-1"></div>
                <div class="crater crater-2"></div>
                <div class="crater crater-3"></div>
                <div class="crater crater-4"></div>
                <div class="crater crater-5"></div>
                <div class="shadow"></div>
                <div class="eye eye-l"></div>
                <div class="eye eye-r"></div>
                <div class="mouth"></div>
                <div class="blush blush-1"></div>
                <div class="blush blush-2"></div>
            </div>
            <div class="orbit">
                <div class="rocket">
                    {/* <div class="window"></div> */}
                    <img src="../images/ufo.png" alt="" />
                </div>
            </div>
    </div>


      <h1>Contact me</h1>

      <div className="contact_container">

        <div className="contact_options">
          <a href="mailto:nejckovac99@gmail.com" className="contact_option">
            <i class="fa-regular fa-envelope"></i>
            <h4>Email</h4>
            <h5>nejckovac99@gmail.com</h5>
            <button>Contact</button>
          </a>

          <a href="https://m.me/nejc.kovac.14" className="contact_option">
            <i class="fa-brands fa-facebook-messenger"></i>
            <h4>Messenger</h4>
            <h5>Nejc Kovač</h5>
            <button>Contact</button>
          </a>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='message' id=""  rows="10" required></textarea>
          <button type='submit'> Send Message</button>
        </form>

        <div className="popup_container closed" id='popup_container'>
          <div className="popup closed" id='popup'>
            <div className="popup_content">
              <div className="close_btn" onClick={()=>close_popup()}> <i class="fa-solid fa-xmark"></i></div>
              <p>Your message has been sent!</p>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Contact