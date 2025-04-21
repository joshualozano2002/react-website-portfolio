import React from 'react';
import './SocialLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SocialLinks() {
  return (
    <div className="social-container">
      <a href="https://github.com/joshualozano2002" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="social-icon" /> 
      </a>
      <a href="https://www.linkedin.com/in/joshua-lozano7/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
      </a>
      <a href="mailto:joshualozano2002@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
      </a>
    </div>
  );
}

export default SocialLinks;