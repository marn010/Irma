import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { data } from './dataFamous';

export default class Product extends Component{
   render(){
      let id = this.props.id
      return(
         <div className="ProductBox">
            <span className="FamousName">
               ____ {data[id].Nombre}
            </span>
            <img className="FamousMainPic" src={data[id].Foto} alt={data[id].Nombre} />
            <Link to={{
               pathname:"/Famoso",
               hash:"#"+data[id].Nombre,
               state: {
                  param1: id,
               },
            }}>
               <img className="VerMas" src="/assets/img/vermas.png" alt="Ver Más" />
            </Link>
         </div>
      );
   }
}