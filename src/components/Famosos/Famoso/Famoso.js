import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';

import "react-multi-carousel/lib/styles.css";
import './Famoso.css';

import { data } from './dataFamoso';
import { Link } from 'react-router-dom';

export default class Famoso extends Component{
      render(){
         const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 2,
                slidesToSlide: 2, // optional, default to 1.
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2, // optional, default to 1.
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
              }
        };
         let id = this.props.location.state.param1;
         let idx = -1;
         let name = data[id].Nombre ;
         let lastname = data[id].Apellido;
         return(
            <React.Fragment>
               <div>

               </div>
               <div className=" FamosoMainBox">
                  <div className="FamosoPics">
                     <Carousel 
                        autoPlay={false}
                        autoPlaySpeed={4000}
                        arrows={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        draggable={false}
                        customTransition="all 1s "
                        transitionDuration={900}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={[ "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="" /*carousel-item-padding*/
                        centerMode={false}
                        renderDotsOutside={false}
                        >
                        {
                           data[id].Fotos.map(() =>{
                              idx=idx+1;
                              return(
                                 <div className="FamousMainPics">
                                    <img className="FamousPic" src={data[id].Fotos[idx]} alt="" />
                                    
                                 </div>
                              );
                           })
                        }
                     </Carousel>
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
                        <a className="redesIcon" href={data[id].Redes[0].insta[0].Link} target="blank" >
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
                     }
                  }} >
                      click aqui.
                  </Link></p>
                  
                  
               </div>
            </React.Fragment>
         );
      }
   }
   
   /* <p> El param es: {this.props.location.state.param1}</p> */