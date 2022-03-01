
import React from 'react';
import '../Navbar';


function Contact () {
    return (
       
        <div>
        <div className='hero-container'>
      
      <h1 className="contact_heading" aria-label="contact us header">Contact Us </h1>      
      
    </div>
    
    <div class="touch">
      <h4> Get in Touch with us ! </h4>

      <div class="addr">
      <h5> ADDRESS </h5>
      <p>Oxford, MS </p>
      <br></br>
      </div>

      <div className='phn'>
      <h5>PHONE </h5>      
      <p> +1 555-555-555</p>
      <br></br>
      </div>

      

      <div class="email">
      <h5>Email </h5>
      <p>contact@EthioFood-app.com</p>

      </div>

      <br></br>

      <div className="social-icons">
      <h5>Follow Us on : </h5>
              
        <a href="https://www.facebook.com/"><img src='images/facebook.png'></img></a>        
        <a href='https://www.instagram.com/'><img src='images/instagram.png'></img></a>
        <a href='https://www.pinterest.com/'><img src='images/pinterest.png'></img></a>
        <a href='https://twitter.com/'><img src='images/twitter.png'></img></a>
        <a href='https://www.youtube.com/'><img src='images/youtube.png'></img></a>     
        
            </div>  

      </div>


    <div>
    <footer> © EthioFood 2021</footer>
    </div>
    
    </div>
        

        
    );
};

export default Contact;





  