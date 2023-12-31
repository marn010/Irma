import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Famoso.css';

import FamosoWeb from './FamosoWeb';
import FamosoMov from './FamosoMov';
import Social from '../../Social/Social';
function Famoso(props){
   let id = props.location.state.param1;
   return(
      <React.Fragment>
         
         <FamosoWeb id={id}/>
         <FamosoMov id={id}/>
         <Social/>
      </React.Fragment>
   );
   }
export default Famoso;