import React, { useContext } from 'react';

import Forms from '../Form/Form';
import GlobalState from '../../globalState';

export default function ContactUS(props){
   const {token: globalToken} =useContext(GlobalState);

   let param1 = props.location.state.param1;
   let param2 = props.location.state.param2;
   let token = globalToken.token;
   if(!token){
      return(
         <Forms param1={param1} param2={param2}/>
      );
   }
   return(
      <React.Fragment>
         <p>it works!</p>
         <p> aqui pondria mas informacion si tuviera.</p>
      </React.Fragment>
   );
}