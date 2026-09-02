import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  // faTwitter,
  faMedium,
  faInstagram, // Import the Orcid icon
} from '@fortawesome/free-brands-svg-icons';
import '../styles/socialbar.css';

const SocialBar = () => {
  return (
    <div className="social-bar">
      
      <a href="https://www.facebook.com/faisalhossain51151/" target="_blank" rel="noopener noreferrer" className='facebook'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      {/* <a href="https://twitter.com/shome_photos" target="_blank" rel="noopener noreferrer" className='twitter'>
        <FontAwesomeIcon icon={faTwitter} />
      </a> */}
      <a href="https://www.instagram.com/faisal_raquib/" target="_blank" rel="noopener noreferrer" className='instagram'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default SocialBar;
