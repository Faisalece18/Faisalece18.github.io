import React from 'react';
import '../styles/awards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faUsers, faCamera, faMicrochip } from '@fortawesome/free-solid-svg-icons';

const Awards = () => {
   return(
      <div className='awards-div-main'>
        <div className='awards-text'>
            <div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faHandsHelping} /></div>
               <div>
                  <span className='award-text-header'><a href='https://www.facebook.com/prarthonactg' target='_blank' rel='noopener noreferrer'>Founder - Prarthona Paribar</a></span>
                  <br />
                  <span className='award-date'>Volunteer Initiative</span>
                  <br />
                  Founded a non-profit initiative distributing food and clothing to underprivileged communities during floods and Ramadan.
               </div>
               </div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faCamera} /></div>
               <div>
                  <span className='award-text-header'>Vice President - Photographic Society of RUET</span>
                  <br />
                  <span className='award-date'>Leadership Experience</span>
                  <br />
                  Served as Vice President, supporting the society's activities and helping organize photography-focused events for students.
               </div>
               </div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faUsers} /></div>
               <div>
                  <span className='award-text-header'>Vice President - CESA</span>
                  <br />
                  <span className='award-date'>Leadership Experience</span>
                  <br />
                  Served as Vice President, contributing to student engagement and extracurricular activities within the organization.
               </div>
               </div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faMicrochip} /></div>
               <div>
                  <span className='award-text-header'>Technical Member - Technocracy</span>
                  <br />
                  <span className='award-date'>Technical Experience</span>
                  <br />
                  Contributed technical skills and support to Technocracy's projects and activities.
               </div>
               </div>
            </div>
        </div>
     </div>
   )
};
   
   export default Awards;