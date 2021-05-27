import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Row, Col, Label } from 'reactstrap';
import axios from 'axios';

import './Form.css';

export default class Forms extends Component{
   constructor(){
      super();
      this.state = {
         showModal: false,
         Name: false,
         Tel: false,
         Business: false,
         Email: false,
         Position: false,
         Message: false,
         Aggree: false,
      }
      this.handleName = this.handleName.bind(this);
      this.handleTel = this.handleTel.bind(this);
      this.handleBusiness = this.handleBusiness.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handlePosition = this.handlePosition.bind(this);
      this.handleMessage = this.handleMessage.bind(this);
      this.handleAggree = this.handleAggree.bind(this);
   }
   handleName(){
      this.setState({Name: true})
   }
   handleTel(){
      this.setState({Tel: true})
   }
   handleBusiness(){
      this.setState({Business: true})
   }
   handleEmail(){
      this.setState({Email: true})
   }
   handlePosition(){
      this.setState({Position: true})
   }
   handleMessage(){
      this.setState({Message: true})
   }
   handleAggree(){
      this.setState({Aggree: true})
   }
   handleSubmit(e){
      e.preventDefault();
      axios.post('/correo/',{
         name: e.target.name.value,
         email: e.target.email.value,
         tel: e.target.tel.value,
         business: e.target.business.value,
         position: e.target.position.value,
         message: e.target.message.value,
         Artist: this.ArtistName ,
      }).then((response)=>{
         debugger;
         if(response.data.status === 'success'){
            alert("Message Sent.");
            e.target.name.value="";
            e.target.email.value="";
            e.target.tel.value="";
            e.target.business.value="";
            e.target.position.value="";
            e.target.message.value="";
         } else if(response.data.status === 'fail'){
            alert("Message failed to send.")
         }
      })
   }
   render(){
      let FormAvaible = "1";
      let ArtistName = this.props.location.state.param1;
      let ArtistLastname = this.props.location.state.param2;
      if(this.state.Name && this.state.Tel && this.state.Business && this.state.Email  && this.state.Position && this.state.Message && this.state.Aggree){
         FormAvaible="";
      }else{
         FormAvaible="1";
      }
      return(
         <React.Fragment>
            <div className="formMainBox">
               <div className="formPics ">
                  <img src="/assets/img/Form/Form01.png" alt="" className="Foto1 margen " />
                  <img src="/assets/img/Form/Form02.png" alt="" className="Foto2 margen " />
                  <br/>
                  <img src="/assets/img/Form/Form03.png" alt="" className="Foto3 margen " />
                  <img src="/assets/img/Form/Form04.png" alt="" className="Foto4 margen " />
                  <img src="/assets/img/Form/Form05.png" alt="" className="Foto5 margen " />
                  <img src="/assets/img/Form/Form06.png" alt="" className="Foto6 margen " />
               </div>
               <div className="formBox ">
                  <Form className="IrmaForm" onSubmit={(e)=>this.handleSubmit(e)}>
                     <Label>
                        Envianos tus datos para más información sobre nuestros artistas. ({ArtistName} {ArtistLastname})
                     </Label>
                     <FormGroup>
                        <Row>
                           <Col md={6}>
                              <Input className="form" type="name" name="name" id="name" placeholder="Nombre y Apellido*" required onChange={this.handleName}/>
                           </Col>
                           <Col md={6}>
                           <Input className="form" type="tel" name="tel" id="tel" placeholder="Teléfono*" required onChange={this.handleTel}/>
                           </Col>
                        </Row>
                     </FormGroup>
                     <FormGroup>
                        <Input className="form" type="business" name="business" id="business" placeholder="Empresa a la que pertenece*" required onChange={this.handleBusiness}/>
                     </FormGroup>
                     <FormGroup>
                        <Input className="form" type="email" name="email" id="email" placeholder="e-mail*" required onChange={this.handleEmail}/>
                     </FormGroup>
                     <FormGroup>
                        <Input className="form" type="position" name="position" id="position" placeholder="Cargo*" required onChange={this.handlePosition}/>
                     </FormGroup>
                     <FormGroup>
                        <Input className="form" type="textarea" rows="4" name="message" id="message" placeholder="¿En qué podemos ayudarlo?*" required onChange={this.handleMessage}/>
                     </FormGroup>
                     <FormGroup>
                        <Input className="form" type="checkbox" name="Terms" id="Terms" required onChange={this.handleAggree}/>{' '}
                        Acepto
                     </FormGroup>
                     <FormGroup>
                        <Button type="submit" disabled={FormAvaible} className="submitBTN" onClick={this.handleSubmit}>
                           Enviar
                        </Button>
                     </FormGroup>
                  </Form>
               </div>
            </div>
         </React.Fragment>
      );
   }
}