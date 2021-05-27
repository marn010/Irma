import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';

import { data } from './dataFamous';

import "react-multi-carousel/lib/styles.css";
import './Famosos.css'
import Product from './Product';
import GlobalState from '../../globalState';

const Famosos = (props) => {

   const {state: globalState} = useContext(GlobalState);

   const responsive = {
      desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3, // optional, default to 1.
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
   return(
      <React.Fragment>
         <div className=" FamousMainBox" id="Famous">
            <div className="FamousPics">
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
                  deviceType={props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="" /*carousel-item-padding*/
                  centerMode={false}
                  renderDotsOutside={false}
                  >
                     {  
                        data.filter((item)=>
                           item.Nombre?.toLowerCase().includes(globalState.searchValue)).map((item,id) =>{
                           return(
                              <div className="">
                                 <Product item={item} id={id}/>
                              </div>
                           );
                        })
                     }
               </Carousel>
            </div>
         </div>
      </React.Fragment>
   );
}

export default Famosos;