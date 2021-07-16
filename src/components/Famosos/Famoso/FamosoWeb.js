import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Famoso.css';

import { data } from './dataFamoso';


function FamosoWeb(props){
   const settings = {
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
      <div className="FamosoWebBox">
         <div className="FamosoMainBox">
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
               <div>
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
export default FamosoWeb;
   /* <p> El param es: {this.props.location.state.param1}</p> 
      const ButtonGroup = ({ next, previous, ...rest }) => {
      const {
            carouselState: { currentSlide, totalItems, slidesToShow }
      } = rest;

      return (
            <div className="carousel-button-group">
               <button aria-label="Go to previous slide"
                  className={currentSlide === 0 ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left"} 
                  onClick={() => previous()}></button>
               <button aria-label="Go to next slide" 
                  className={currentSlide === totalItems - slidesToShow ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"} 
                  onClick={() => next()}></button>
            </div>
      );
   }; 
   /* let { token, setToken } = useToken(); */
   /* if(!token){
      return();
   } 
   */