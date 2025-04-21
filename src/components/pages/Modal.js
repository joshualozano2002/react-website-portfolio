import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, title, image, description, course, tags = [], challenges = [], functionalities = [] }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>×</button>
        
        <h2 className="modal-title">{title}</h2>
        {image && <img src={image} alt={title} className="modal-image" />}
        <p className="modal-description">{description}</p>
        {course && <p className="modal-course"><strong>Course:</strong> {course}</p>}

        {functionalities.length > 0 && (
        <>
            <h3 className="modal-subheading">Core Functionalities:</h3>
            <ul className="modal-list">
            {functionalities.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </>
    )}

        {tags.length > 0 && (
          <div className="modal-tags">
            {tags.map((tag, index) => (
              <span key={index} className="modal-tag">{tag}</span>
            ))}
          </div>
        )}

        {challenges.length > 0 && (
          <>
            <h3 className="modal-subheading">Key Challenges:</h3>
            <ul className="modal-list">
              {challenges.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;