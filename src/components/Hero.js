import React from 'react';

import '../styles/Hero.css';  

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>Creating Visual Stories</h1>
        <p>Your Dreams Our Vision</p>
       
        
      </div>
      
      <video className="filmstrip-video" autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + '/assets/videos/filmstrip.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;


