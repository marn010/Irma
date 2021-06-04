import React, { useState } from 'react';
/* import GlobalState from '../../globalState'; */

import './Login.css';

export default function Login({setToken}){
   const [password,setPassword] = useState();
   /* const {token: globalToken} = useContext(GlobalState); */

   const pass= 'tprgQLEMrp1zdjNsqzgrTUw049ip1aA/xOFIW9YH/sw=';
   var crypto = require('crypto');
   const handleSubmit = async e=> {
      e.preventDefault();
      const hash = crypto.createHash('sha256').update(password).digest('base64');
      alert("La clave ingresada fue: " + password);
      /* alert("El Hash producido es: " + hash); */
      if(hash===pass){
         setToken(pass)
         
         alert("codigo aceptado")
      }else{
         alert("El código ingresado no corresponde con nuestra base de datos.")
      }
   }

   return(
      <div className="mainLogBox">
         <form onSubmit={handleSubmit}>
            <div className="input">
               <label className="">
                  <p>Ingresa el codigo</p>
                  <input type="password" onChange={e => setPassword(e.target.value)} />
               </label>
            </div>
            <div>
               <button className="" type="submit">Ingresar</button>
            </div>
         </form>
      </div>
   );
}