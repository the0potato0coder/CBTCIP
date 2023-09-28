import React from 'react';
import './home.css';



export default function Home() {
  return (
    <>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <body>
      <section class="home" id="home">
        <div class="home-content">
          <h1>Expert Opinion On Demand</h1>
          <h3>Easy and convenient access for anyone away from hometown</h3>

          <div class="social-media">
            <a href="/"><i class='bx bxl-facebook'></i></a>
            <a href="/"><i class='bx bxl-twitter'></i></a>
            <a href="/"><i class='bx bxl-instagram' ></i></a>
            <a href="/"><i class='bx bxl-linkedin' ></i></a>
          </div>
            <a href="/Contact" class="btn">Book Now Doctors and Therapists</a>
            </div>
            <div class="home-img" >
              <img src="./images/Med.jpg"  alt="..." ></img>
            </div>        
        
       
      </section>

      <div class="callback">
        <h4>Book a Free Callback <a href="/Contact" class="btn">Book Now</a></h4>
      
      </div>
      
      <div>
        <div class="who">
          <h1>Who are <span>WE?</span></h1>
          <h3>Medco is a Trusted Teleconsulting Platform for Global Indians or anyone away from hometown, to get expert opinion from Doctors, Lawyers, CAs, Architects and Consultants. This platform allows users to consult through a video/audio/chat consultation securely. A user can consult with qualified & experienced professionals based in India, from the comfort of their home.</h3>
          {/*<div class="book">
            <h2>Book an Appointment</h2>
            <a href="/Contact" class="btn">Book Now</a>
          </div>*/}
          
        </div>
        
      </div>
      
      <div class="callback">
        <h4>Book a Free Callback <a href="/Contact" class="btn">Book Now</a></h4>
      
      </div>

      <div>
        <div class="com">
          <h1>Our <span>COMMITMENT</span></h1>
          <h3>We stringently verify each onboarded professionals to ensure they are licensed and/or with good repute, for our users to experience the highest quality expert opinions. Our goal is to help our users to make informed decisions for their important situations.</h3>
         <div>
          <img src="./images/Bet-pic.png" alt="..." />
         </div>
          
        </div>
        
      </div>

      <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2023 by Zero&One | All Rights Reserved.</p>
        </div>

        <div class="footer-iconTop">
            <a href="/"><i class='bx bx-up-arrow-alt' ></i></a>
        </div>
    </footer>



    </body>
    
    </>

  )
}
