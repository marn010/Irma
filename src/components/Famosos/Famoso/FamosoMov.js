import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Famoso.css';

import { data } from './dataFamoso';


function FamosoMov(props){
   const settings = {
      arrows:false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
   
   let id = props.id;
   let idx = -1;
   let name = data[id].Nombre ;
   let lastname = data[id].Apellido;
   let nick = data[id].Redes[0].Twitter[0].Nick;
   let ID = data[id].ID;
   return(
      <div className="FamosoMovBox">
         <div className="FamosoMainBox">
            <div className="FamosoText">
               <div>
                  <div className="FamosoTitle Rosa">
                     <p>
                        ____ {data[id].Nombre} {data[id].Apellido} <span className="MainIcon"><img src={data[id].Icon} alt="" /> </span>
                     </p>
                  </div>
                  <p className="Rosa">
                     {data[id].Profesion}
                  </p>
                  <span className="Rosa"> 
                     {data[id].Exp}
                  </span>
               </div>
               <div className="famousText">
                  <p>
                     {data[id].Texto}
                  </p>
               </div>
               <div>
                  <a className="redesIcon"  href={data[id].Redes[0].insta[0].Link} target="blank" >
                     <img src={data[id].Redes[0].insta[0].img} alt="" />
                  </a>
                  <a className="redesIcon" href={data[id].Redes[0].face[0].Link} target="blank" >
                     <img src={data[id].Redes[0].face[0].img} alt="" />
                  </a>
                  <a className="redesIcon" href={data[id].Redes[0].Twitter[0].Link} target="blank" >
                     <img src={data[id].Redes[0].Twitter[0].img} alt="" />
                  </a>
               </div>
            </div>
            <div className="FamosoPics">
             <Slider {...settings}>
                  {
                     data[id].Fotos.map(() =>{
                        idx=idx+1;
                        return(
                           <div className="FamousMainPics" key={idx}>
                              <img className="FamousPic" src={data[id].Fotos[idx]} alt=""  /> 
                           </div>
                        );
                     })
                  }
               </Slider>
            </div>
           
         </div>
         <div className="MoreInfoBox">
            <p>Para saber más de <span className="Rosa">{data[id].Nombre}</span>, marcas y estadisticas digitales haz&nbsp; 
            <Link to={{
               pathname:"/ContactUS",
               state:{
                  param1: name,
                  param2: lastname,
                  param3: nick,
                  ID: ID,
               }
            }} >
                  click aqui.
            </Link></p>
         </div>
      </div>
   );
   }
export default FamosoMov;
