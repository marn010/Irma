import React, { Component } from 'react';
import Social from '../Social/Social';

import './Footer.css';

export default class Footer extends Component{
   render(){
      return(
         <div className="FooterMainBox">
            <Social/>
            <div className="CopyRight">
               <p>
                  Todos los derechos reservados <br/>Irma.Manager 2020
               </p>
            </div>
         </div>
      );
   }
}