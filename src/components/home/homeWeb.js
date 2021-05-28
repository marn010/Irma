import React, { Component } from 'react';
import Famosos from '../Famosos/Famosos';

import './home.css';


export default class HomeWeb extends Component{
   render(){
      return(
         <React.Fragment>
            
            <Famosos/>
         </React.Fragment>
      );
   }
}