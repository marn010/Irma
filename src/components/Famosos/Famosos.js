import React from 'react';

import "react-multi-carousel/lib/styles.css";
import './Famosos.css'

import FamososWeb from './FamososWeb';
import FamososMov from './FamososMov';

const Famosos = (props) => {

   return(
      <div>
         <FamososWeb/>
         <FamososMov/>
      </div>
   );
}

export default Famosos;