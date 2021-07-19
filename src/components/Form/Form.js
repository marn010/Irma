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
      this.handleSubmit = this.handleSubmit.bind(this);
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
      /*/correo/*/
      /*http://localhost/ */
      axios.post('/correo/',{
         name: e.target.name.value,
         email: e.target.email.value,
         tel: e.target.tel.value,
         business: e.target.business.value,
         position: e.target.position.value,
         message: e.target.message.value,
         Artist: this.props.param1 + ' ' + this.props.param2,
         IdArtist: this.props.ID,
      }).then((response)=>{
         /* debugger; */
         if(response.data.status === 'success' || response.statusText === 'OK'){
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
      if(this.state.Name && this.state.Tel && this.state.Business && this.state.Email  && this.state.Position && this.state.Message && this.state.Aggree){
         FormAvaible=false;
      }else{
         FormAvaible=true;
      }
      return(
         <React.Fragment>
            <div className="formMainBox">
               <div className="formPics ">
                  <img src="/assets/img/Form/FotoFull.png" alt="" className="Foto" />
               </div>
               <div className="formBox ">
                  <Form className="IrmaForm" onSubmit={(e)=>this.handleSubmit(e)}>
                     <Label>
                        Envianos tus datos para más información sobre nuestros artistas. {/* ({ArtistName} {ArtistLastname} {ID}) */}
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
                        <Input className="form" type="textarea" rows="2" name="message" id="message" placeholder="¿En qué podemos ayudarlo?*" required onChange={this.handleMessage}/>
                     </FormGroup>
                     <FormGroup className="legalBox">
                        <Input className="form legalcheck" type="checkbox" name="Terms" id="Terms" required onChange={this.handleAggree}/>{' '}
                        <span className="legalForm">
                        En cumplimiento de las disposiciones de la Ley 1581 de 2012 y del Decreto reglamentario 1377 de 2013 que desarrollan el derecho de habeas data, solicitamos su autorización para que <i>IRMA manager</i> en calidad de Responsable del Tratamiento pueda recopilar, almacenar, archivar, copiar, analizar, usar y consultar los datos que se señalan a continuación.
                        </span>
                     </FormGroup>
                     <FormGroup>
                        <Button type="submit" disabled={FormAvaible}  className="submitBTN" >
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