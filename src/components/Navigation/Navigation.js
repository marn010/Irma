import React, { Component, useContext, useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import { Form, Button, Input } from 'reactstrap';
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
      this.toggleNav();
   }
   const searchAnyElse = e => {
      e.preventDefault();
      console.log(searchValue);
      updateSearchValue(searchValue.toLowerCase());
   }
   return(
      <div className="MainNavbar" >
         <Navbar color="faded" light>
            <NavbarToggler onClick={toggleNav} className="mr-2"/>
            <NavbarBrand href="/" className="mr-auto">
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
               <NavItem>
                  <Form inline onSubmit={searchAnyElse}>
                     <Input type="text" onChange={(e)=> updateSearchValue( e.target.value.toLowerCase())} placeholder="Search" className="mr-sm-2" />
                     <Button variant="outline-success">Search</Button>
                  </Form>
               </NavItem>
            </Nav>
         </Navbar>
      </div>
   );
}

export default Navigation;