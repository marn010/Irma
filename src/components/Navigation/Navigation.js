import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './Navigation.css'

export default class Navigation extends Component{
   constructor(props){
      super(props);
      this.state = {
         isNavOpen: false
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.closeNavbar = this.closeNavbar.bind(this);
   }
   toggleNav(){
      this.setState({
         isNavOpen: !this.state.isNavOpen
      });
   }
   closeNavbar(){
      if(this.state.collapsed !== true){
         this.toggleNav();
      }
   }
   render(){
      return(
         <div style={{position:"fixed"}}>
            <Navbar color="faded" light>
               <NavbarToggler onClick={this.toggleNav} className="mr-2" />
               <NavbarBrand href="/" className="mr-auto">
                  
               </NavbarBrand>
               <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                     <NavItem>
                        <NavLink
                        className="nav-link"
                        to="/home"
                        target="_top"
                        onClick={this.closeNavbar}>
                           Home
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink
                        className="nav-link"
                        to="/famous"
                        target=""
                        onClick={this.closeNavbar}>
                           Artistas
                        </NavLink>
                     </NavItem>
                  </Nav>
               </Collapse>
            </Navbar>
         </div>
      );
   }
}