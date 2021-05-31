import React, { Component } from 'react';
import Carousel from "react-multi-carousel";

import { data } from './data';

import "react-multi-carousel/lib/styles.css";
import Product from './Product';

export default class Slider extends Component{
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
         <React.Fragment >
            <div className="">
                <Carousel 
                    autoPlay={false}
                    autoPlaySpeed={4000}
                    arrows={true}
                    showDots={false}
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
                            data.map(() =>{
                                id=id+1;
                                return(
                                    <div className="">
                                       <Product id={id} key={id}/>
                                    </div>
                                );
                            })
                        }
                </Carousel>
            </div>
         </React.Fragment>
      );
   }
}