import React, { useContext, useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Row, Col, Label, Button, } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import './Navigation.css'
import GlobalState from '../../globalState';


const Navigation = () => {
   const {state: globalState} = useContext(GlobalState);
   const { updateSearchValue } = useContext(GlobalState);
   const [isNavOpen, setisNavOpen] = useState(false);
   /* const {token: globalToken} = useContext(GlobalState); */
   const { updateToken } = useContext(GlobalState);
   const [showModal, setshowModal] = useState(false);

   const toggleNav = () =>{
      setisNavOpen(
         !isNavOpen
      );
   }
   const closeNavbar = () =>{
      toggleNav();
   }
   const searchAnyElse = e => {
      e.preventDefault();
      console.log(globalState.searchValue);
      /* setSearchValue(globalState.searchValue); */
      /* updateSearchValue(searchValue.toLowerCase()); */
   }
   const handleOpenModal =() =>{
      setshowModal(true)
   }
   const handleCloseModal = () =>{
      setshowModal(false)
   }

   Modal.setAppElement('#root');
   return(
      <div className="MainNavbar " >
         <Navbar color="faded" light>
            <NavbarToggler onClick={toggleNav} className="mr-2"/>
            <NavbarBrand href="/" className="mr-auto" style={{textAlign:"left"}}>
               <img src="/assets/img/Irma/IrmaSigning.png" alt="" className="navbarIrma" />
            </NavbarBrand>
            <Collapse isOpen={isNavOpen} navbar>
               <Nav navbar>
                  <NavItem>
                     <NavLink
                     className="nav-link"
                     to="/home"
                     target="_top"
                     onClick={closeNavbar}>
                        Home
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink
                        className="nav-link"
                        to="AboutMe" 
                        target=""
                        onClick={closeNavbar}>
                           IRMA
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <Link className="nav-link" onClick={closeNavbar} to={{
                        pathname:"/ContactUS",
                        state: {
                           param1: "",
                           param2: "",
                           param3: "",
                        },
                     }}>
                        Contacto
                     </Link>
                  </NavItem>
               </Nav>
            </Collapse>
            <Nav navbar>
               <NavItem className="searchBar">
                  <Form inline onSubmit={searchAnyElse}>
                     <Row>
                        <Col md={6}>
                           <Label className="formTitle Rosa">management</Label>
                        </Col>
                        <Col md={6}>
                           <Input type="text" name="search" id="search" onChange={(e)=> updateSearchValue( e.target.value.toLowerCase())} placeholder="búsqueda personalizada" className="mr-sm-2 searchfield Afterglow" />
                           {/* <Button variant="outline-success">Search</Button> */}
                        </Col>
                     </Row>
                  </Form>
               </NavItem>
               <NavItem>
                  <Button className="LoginBTN" onClick={handleOpenModal}>
                     Login
                  </Button>
               </NavItem>
            </Nav>
         </Navbar>
         <Modal 
            isOpen={showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={handleCloseModal}
            className="Modal"
            overlayClassName="Overlay"
         >
            <Login setToken={updateToken} handleCloseModal={handleCloseModal}  />
         </Modal>
      </div>
   );
}

export default Navigation;