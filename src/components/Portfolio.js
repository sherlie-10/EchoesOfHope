import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Our Portfolio</h2>
        {/* Video */}
      <div className="portfolio-item">
        <video width="300" controls>
          <source src="/assets/videos/metro%20bgm%20shrl%20dae%20musicc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>Project </p>
      </div>
    </section>
  );
};

export default Portfolio;
