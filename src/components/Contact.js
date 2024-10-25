import React, { useState } from 'react';
import '../styles/Contact.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  // Update state when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8080/api/contacts', formData);
        alert(response.data); // Display the response message

        // Reset the form data after successful submission
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            message: ''
        });
    } catch (error) {
        console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <section id="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Request a Callback</h2>
        <p>We’d love to get back to you. Please fill out the form, and we'll call you shortly.</p>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          value={formData.email} 
          onChange={handleChange} 
        />
        <input 
          type="tel" 
          name="phoneNumber" 
          placeholder="Phone Number" 
          required 
          value={formData.phoneNumber} 
          onChange={handleChange} 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required 
          value={formData.message} 
          onChange={handleChange} 
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
