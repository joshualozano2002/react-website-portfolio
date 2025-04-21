import React from "react";
import '../../App.css';

export default function Resume() {
    return (
      <div
      
        className="Resume"
        style={{
          padding: '100px 20px',
          textAlign: 'center',
          backgroundColor: 'transparent'
        }}
      >
        <video autoPlay loop muted playsInline className="resume-video-bg">
        <source src="/videos/video-4.mp4" type="video/mp4" />
      </video>
  
        <iframe
          src="/resume.pdf"
          title="Joshua Lozano Resume"
          width="80%"
          height="1000px"
          style={{
            border: '3px solid black',
            borderRadius: '12px',
            backgroundColor: 'transparent',
          }}
        />
      </div>
    );
  }