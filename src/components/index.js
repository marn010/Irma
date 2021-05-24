import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Famoso from './Famosos/Famoso/Famoso';
import Famosos from './Famosos/Famosos';
import Footer from './Footer/Footer';
import home from './home/home';

import './index.css'
import Navigation from './Navigation/Navigation';

export default class Main extends Component{
   render(){
      return(
         <div className="Main">
            <Router>
               <Navigation/>
               <Switch>
                  <Route path="/home" component={home}></Route>
                  <Route path="/famous" component={Famosos}></Route>
                  <Route path="/Famoso" component={Famoso}></Route>
                  <Redirect to="/home"></Redirect>
               </Switch>
            </Router>
            <Footer/>
         </div>
      );
   }
}