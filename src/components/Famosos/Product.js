import React, { Component } from 'react';
import { Link } from 'react-router-dom';


/* import { data } from './dataFamous'; */

export default class Product extends Component{
   render(){
      let { item,id } = this.props;
      
      return(
         <div className="ProductBox">
            <span className="FamousName Afterglow">
               ____ {item.Nombre}
            </span>
            <img className="FamousMainPic" src={item.Foto} alt={item.Nombre} />
            <Link to={{
               pathname:"/Famoso",
               hash:"#"+item.Nombre,
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