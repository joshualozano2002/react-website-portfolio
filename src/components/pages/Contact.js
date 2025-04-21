import React from "react";
import '../../App.css';
import SocialLinks from "../SocialLinks";

export default function Contact() {
    return (
      <div className="contact-container">
        <h1 className="contact-heading">Get In Touch</h1>
        <div className="contact-methods">
          <a href="mailto:joshualozano2002@gmail.com" className="contact-link glow">
            📧 joshualozano2002@gmail.com
          </a>
          <a href="https://github.com/joshualozano2002" target="_blank" rel="noopener noreferrer" className="contact-link glow">
            💻 GitHub: @joshualozano2002
          </a>
          <a href="https://www.linkedin.com/in/joshua-lozano7/" target="_blank" rel="noopener noreferrer" className="contact-link glow">
            💼 LinkedIn: /joshua-lozano7
          </a>
          <SocialLinks />
        </div>
      </div>
    );
  }