import React, { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { data } from './dataFamous';

import "react-multi-carousel/lib/styles.css";
import './Famosos.css'
import Product from './Product';
import GlobalState from '../../globalState';

const FamososMov = (props) => {

   const {state: globalState} = useContext(GlobalState);
   const settings = {
      arrows:false,
      infinite: true,
      slidesToShow: 1,
      initialSlide: 0,
      speed: 500,
      rows: 1,
      slidesPerRow: 1,
   };
   
   return(
      <div className="FamousMainMov">
         <div className="FamousMainBox" id="Famous">
            <div className="FamousPics">
               <Slider {...settings}>
                     {  
                        data.filter((item)=>
                           item.Nombre?.toLowerCase().includes(globalState.searchValue)).map((item,id) =>{
                              let IDX = item.ID;
                           return(
                              <div>
                                 <Product item={item} id={IDX} key={id}/>
                              </div>
                           );
                        })
                     }
               </Slider>
            </div>
            <img className="slide" src="/assets/icons/slide.png" alt="desliza" />
         </div>
      </div>
   );
}

export default FamososMov;