import React from 'react';

import "react-multi-carousel/lib/styles.css";
import './Famosos.css'

import FamososWeb from './FamososWeb';
import FamososMov from './FamososMov';
import Social from '../Social/Social';

const Famosos = (props) => {

   return(
      <div>
         <FamososWeb/>
         <FamososMov/>
         <Social/>
      </div>
   );
}

export default Famosos;