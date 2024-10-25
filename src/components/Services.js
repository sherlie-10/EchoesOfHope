import React from 'react';
import '../styles/Services.css';

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services">
        <h3>TV Commercials</h3>
        <p>High-quality commercials that resonate with audiences.</p>
      </div>
      <div className="services">
        <h3>Short Films</h3>
        <p>Engaging narratives crafted to captivate viewers.</p>
      </div>
      
      <div className="services">
        <h3>Music Videos</h3>
        <p>Creative videos that elevate your music.</p>
      </div>
      <div className="services">
        <h3>Photoshoots and Photography</h3>
        <p>Professional photoshoots for various occasions, capturing stunning visuals.</p>
      </div>
      <div className="services">
        <h3>Feature Films</h3>
        <p>Full-length feature films that tell compelling stories with cinematic excellence.</p>
      </div>
    </section>
  );
};

export default Services;
