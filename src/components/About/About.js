import React from 'react';
import AboutWeb from './AboutWeb';
import AboutMov from './AboutMov';

import './About.css';


function About(){
   return(
      <React.Fragment>
         <div className="AboutWeb">
            <AboutWeb/>
         </div>
         <div className="AboutMov">
            <AboutMov/>
         </div>
      </React.Fragment>
   );
}
export default About;