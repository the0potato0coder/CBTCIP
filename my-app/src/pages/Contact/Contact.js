import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <>
    
       <section class="contact" id="contact">
        <h2 class="heading"> Contact <span>Us</span></h2>

        <form action="#">
            <div class="input-box">
                <input type="text" name="" id="" placeholder="Full Name"/>
                <input type="email" name="" id="" placeholder="Email Address"/>

            </div>
            <div class="input-box">
                <input type="number" name="" id="" placeholder="Mobile Number"/>
                <input type="text" name="" id="" placeholder="Email Subject"/>

            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" class="btn"/>
        </form>
    </section>
    
</>
  )
}
