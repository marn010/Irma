import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';

import { data } from './dataFamous';

import "react-multi-carousel/lib/styles.css";
import './Famosos.css'

export default class Famosos extends Component{
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
     let id=-1;
      return(
         <React.Fragment>
            <div className=" FamousMainBox">
               <div className="bordes FamousPics">
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
                           data[0].Fotos.map(() =>{
                              id=id+1;
                              return(
                                 <div className="">
                                    <img src={data[0].Fotos[id]} alt="" />
                                 </div>
                              );
                           })
                        }
                  </Carousel>
               </div>
               <div className="bordes FamousText">
                  <div>
                     <p>
                        {data[0].Nombre}
                     </p>
                     <p>
                        {data[0].Profesion}
                     </p>
                  </div>
                  <div>
                     <p>
                        {data[0].Texto}
                     </p>
                  </div>
                  <div>
                     <a className="redesIcon" href={data[0].Redes[0].insta[0].Link} target="blank" >
                        <img src={data[0].Redes[0].insta[0].img} alt="" />
                     </a>
                     <a className="redesIcon" href={data[0].Redes[0].face[0].Link} target="blank" >
                        <img src={data[0].Redes[0].face[0].img} alt="" />
                     </a>
                     <a className="redesIcon" href={data[0].Redes[0].Twitter[0].Link} target="blank" >
                        <img src={data[0].Redes[0].Twitter[0].img} alt="" />
                     </a>

                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}