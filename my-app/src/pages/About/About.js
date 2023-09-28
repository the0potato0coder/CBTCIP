import React from 'react';
import './About.css';

export default function About() {
  return (
    <>

    <section class="about" id="about">
    <div class="about-img">
        <img src="Med2.jpg" alt=""/>
    </div>

    <div class="about-content">
        <h2 class="heading">About <span>US</span></h2>
        
        <p>
        Medico is the premium expert opinion platform that provides users (Global Indians or anyone away from their hometown) with personalized advice and guidance on important matters.
        </p>
        <p>
        Medico panel of experts includes highly qualified and experienced doctors, lawyers, chartered accountants, architects, designers, and other rare consultants. Great care is taken in expanding their team by regularly onboarding new top-of-the-line consultants, doctors, and experts who undergo a rigorous validation process, including referrals and vetting. Users can consult human experts who possess deep knowledge in their respective fields, gaining access to expert insights, alternative perspectives, and critical analysis that contribute to well-informed decision-making.
        </p>
        <p>
        Through Medico websites and apps, users gain access to comprehensive expert profiles, convenient appointment scheduling, and flexible options for video, audio, or chat consultations. With integrated payment capabilities and a satisfaction rating system, our platform eliminates the need for travel, reduces risks, and saves valuable time and money for our users.
        </p>
        <p>
        Medico team's human-centric approach emphasizes compassion and care, ensuring that individuals receive support at the earliest. To provide a seamless experience, they offer case managers who help users even if it requires in-person consultations. The Medico experts offer personalized guidance tailored to the user's unique needs and circumstances. By leveraging the competence of human professionals, Medico bridges the gap between specialized knowledge and actionable next steps.
        </p>
        <a href="/Contact" class="btn">Contact Us</a>
    </div>
</section>

<section class="services" id="services">
   <div class="vison-container">
            <div class="vison-box">
                <i class='bx bx-code-alt'></i>
                <h3>Our Vison</h3>
                <p>Our vision is to be the premier online platform, enabling individuals to consult verified experts for valuable insights and personalized guidance before making important decisions.</p>
                </div>
                <div class="vison-box">
                <i class='bx bx-code-alt'></i>
                <h3>Our Mission</h3>
                <p>Empowering a million lives through informed decision-making for a better future.</p>
                </div>
        
    </div>
    </section>
    </>
  )
}
