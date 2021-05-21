import React, { Component } from 'react';

import './Social.css';

export default class Social extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="SocialBox">
               <a href="https://www.instagram.com" target="blank">
                  <img className="socialIcon" src="/assets/icons/Insta_Pink.png" alt="Instagram" />
               </a>
               <a href="https://www.facebook.com" target="blank">
                  <img className="socialIcon" src="/assets/icons/Face_Pink.png" alt="Facebook" />
               </a>
               <a href="https://www.youtube.com" target="blank">
                  <img className="socialIcon" src="/assets/icons/Youtube_Pink.png" alt="Youtube" />
               </a>
               <a href="https://www.Linkedin.com" target="blank">
                  <img className="socialIcon" src="/assets/icons/Linkedin_Pink.png" alt="LinkedIn" />
               </a>
               
                  <img className="socialIcon" src="/assets/icons/WP_Pink.png" alt="WhatsApp" />
               
            </div>
         </React.Fragment>
      );
   }
}