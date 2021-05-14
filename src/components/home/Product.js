import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText } from 'reactstrap';

import { data } from './data';

export default class Product extends Component{
   render(){
      const { id } = this.props;
      return(
         <React.Fragment>
            <Card className="" >
               <CardImg className="" src={data[id].Image} alt={data[id].Name} height="100%" />
                  <CardText className="">
                     <CardBody>
                        <p style={{marginBottom:"0%"}}>
                           <span className="">
                              <i>{data[id].Name} </i>
                           </span>
                        </p>
                     </CardBody>
                  </CardText>
            </Card>
         </React.Fragment>
      );
   }
}