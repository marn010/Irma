import React, { Component } from 'react';

import './home.css';
import HomeWeb from './homeWeb';
import HomeMov from './homeMov';

export default class home extends Component{
   render(){
      return(
         <React.Fragment>
            <HomeWeb/>
            <HomeMov/>
         </React.Fragment>
      );
   }
}