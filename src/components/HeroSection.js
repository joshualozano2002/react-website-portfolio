import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Hi, I'm Josh</h1>
      <p>I am a Computer Science student, <br/> emphasizing in backend development, 
        and machine learning.</p>
      <div className='hero-btns'>
        <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
          About Me
        </Button>
        {/* <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
          Watch Trailer <FontAwesomeIcon icon={faPlayCircle} className="text-white text-2xl ml-2" />
        </Button> */}
      </div>
    </div>
  )
}

export default HeroSection
