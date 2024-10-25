import React from 'react';
import '../styles/Footer.css';
import instagramIcon from '../assets/images/instagram.jpeg'; // Import Instagram icon only if used

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Echoes Of Hope Media. All rights reserved.</p>
      <div className="social-media">
        <a href="https://www.instagram.com/echoesofhopemedia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="instagram-link">
          <img src={instagramIcon} alt="Instagram" className="instagram-icon" /> Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
