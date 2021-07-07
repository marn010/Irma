import React, { Component } from 'react';

import './home.css';
import HomeWeb from './homeWeb';

export default class home extends Component{
   render(){
      return(
         <div id="Home">
            <HomeWeb/>
         </div>
      );
   }
}