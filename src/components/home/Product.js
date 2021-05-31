import React, { Component } from 'react';

import { data } from './data';

export default class Product extends Component{
   render(){
      const { id } = this.props;
      return(
         <React.Fragment>
            <img className="Irmapic" src={data[id].Image} alt="" key={id} />
         </React.Fragment>
      );
   }
}