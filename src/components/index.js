import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Famoso from './Famosos/Famoso/Famoso';
/* import Famosos from './Famosos/Famosos'; */
import Footer from './Footer/Footer';
import home from './home/home';
import About from './About/About';
import Navigation from './Navigation/Navigation';
import ContactUS from './ContactUS/ContactUS';

import './index.css'
/* import Login from './Login/Login'; */

export default function Main() {
   return (
      <div className="Main">
         <Router>
            <Navigation />
            <Switch>
               <Route path="/home" component={home}></Route>
               {/* <Route path="/famous" component={Famosos}></Route> */}
               <Route path="/Famoso" component={Famoso}></Route>
               <Route path="/ContactUS" component={ContactUS}></Route>
               <Route path="/AboutMe" component={About}></Route>
               {/* <Route path="/login" component={Login}></Route> */}
               {/* <Route path="/" component={}></Route> */}
               <Redirect to="/home"></Redirect>
            </Switch>
            <Footer />
         </Router>
      </div>
   );
}