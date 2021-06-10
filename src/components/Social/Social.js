import React, { Component } from 'react';

import './Social.css';

export default class Social extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="SocialBox">
               <a href="https://www.instagram.com/irma.manager/" target="blank">
                  <img className="socialIcon" src="/assets/icons/Insta_Pink.png" alt="Instagram" />
               </a>
               {/* <a href="https://www.Linkedin.com" target="blank">
                  <img className="socialIcon" src="/assets/icons/Linkedin_Pink.png" alt="LinkedIn" />
               </a> */}
               <a href="https://wa.link/mhskvm" target="blank">
                  <img className="socialIcon" src="/assets/icons/WP_Pink.png" alt="WhatsApp" />
               </a>
               
            </div>
         </React.Fragment>
      );
   }
}