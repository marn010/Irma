import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText } from 'reactstrap';

import { data } from './data';

export default class Product extends Component{
   render(){
      const { id } = this.props;
      return(
         <React.Fragment>
            <Card className="Irma" >
               <CardImg className="Irmapic" src={data[id].Image} alt="" height="100%" />
                  <CardText className="">
                     <CardBody>
                     </CardBody>
                  </CardText>
            </Card>
         </React.Fragment>
      );
   }
}