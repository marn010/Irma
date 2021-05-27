import React, { useContext, useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Row, Col, Label, } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './Navigation.css'
import GlobalState from '../../globalState';

const Navigation = () => {


   const { updateSearchValue } = useContext(GlobalState);
   const [isNavOpen, setisNavOpen] = useState(false);
   const [searchValue, setSearchValue] = useState('');

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
      console.log(searchValue);
      updateSearchValue(searchValue.toLowerCase());
   }
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
                     to="/famous"
                     target=""
                     onClick={closeNavbar}>
                        Artistas
                     </NavLink>
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
                           <Input type="text" onChange={(e)=> updateSearchValue( e.target.value.toLowerCase())} placeholder="búsqueda personalizada" className="mr-sm-2 searchfield Afterglow" />
                           {/* <Button variant="outline-success">Search</Button> */}
                        </Col>
                     </Row>
                  </Form>
               </NavItem>
            </Nav>
         </Navbar>
      </div>
   );
}

export default Navigation;