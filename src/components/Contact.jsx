import React from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

   const address = [<p>Chittagong, Bangladesh</p>];
   
   const email = [<a href="mailto:ss3038@hw.ac.uk" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>faisal.ece18@gmail.com</p>
   </a>];
   
   const blog = [<a href="" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>Personal Blog</p>
   </a>];

   const facebook = [<a href="https://www.facebook.com/faisalhossain51151/" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>Facebook</p>
   </a>];

   const instagram = [<a href="https://www.instagram.com/faisal_raquib/" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>Instagram</p>
   </a>];

   const linkedin = [<a href="https://www.linkedin.com/in/faisal-hossain-raquib/" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>LinkedIn</p>
   </a>];

   return(
      <div className='contact-div-main'>
            <div className='contact-grid'>
               <div className='contact-text'>
                  <div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLocationDot} />{address}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faEnvelope} />{email}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faMedium} />{blog}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLinkedin} />{linkedin}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faFacebook} />{facebook}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faInstagram} />{instagram}
                     </div>
                  </div>
               </div>
               <div className='contact-grid-2'>
                  <iframe 
                  src="https://www.google.com/maps?q=Rajshahi+University+of+Engineering+%26+Technology+(RUET)&output=embed"
                  width="600" 
                  height="450" 
                  className="map-contact"
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Google Maps RUET"
                  referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
               </div>
            </div>
     </div>
   )
};
   
export default Contact;