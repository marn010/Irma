import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import home from './home/home';

export default class Main extends Component{
   render(){
      return(
         <React.Fragment>
            <Router>
               <Switch>
                  <Route path="/home" component={home}></Route>
                  <Redirect to="/home"></Redirect>
               </Switch>
            </Router>
         </React.Fragment>
      );
   }
}