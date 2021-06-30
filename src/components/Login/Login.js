import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { data } from '../Famosos/Famoso/dataFamoso';
/* import GlobalState from '../../globalState'; */

import './Login.css';

export default function Login({setToken,handleCloseModal}){
   let Idd;
   let param1;
   let param2;
   let param3;
   let idx;
   function handleID(Id){
      let ID=(Id+'').slice(-2)
      idx= parseInt(ID) ;
      param1=data[idx].Nombre;
      param2= data[idx].Apellido;
      param3= data[idx].Redes[0].Twitter[0].Nick;
      return (param1,param2,param3,Idd)
  }
   const [password,setPassword] = useState();
   const [Id,setId] = useState();
   /* const {token: globalToken} = useContext(GlobalState); */
   let history = useHistory();
   const pass= 'r3yIDGF4x9qEnFUheBa69M3zfY9v1cMuaTqycscZbvk=';
   var crypto = require('crypto');
   const handleSubmit = async e=> {
      e.preventDefault();
      const hash = crypto.createHash('sha256').update(password).digest('base64');
      /* alert("La clave ingresada fue: " + password); */
      /* alert("El Hash producido es: " + hash); */
      handleCloseModal();
      if(hash===pass){
         setToken(pass)
         /* alert("codigo aceptado"); */
         handleID(Id);
         history.push('/ContactUS',{ID:Idd,param1:param1,param2:param2,param3:param3});
      }else{
         alert("El código ingresado no corresponde con nuestra base de datos.")
      }
   }

   return(
      <div className="mainLogBox">
         <form onSubmit={handleSubmit}>
            <div className="input">
               <label className="">
                  <p className="logTitle Rosa">Ingresa el codigo</p>
                  <input type="password" onChange={e => setPassword(e.target.value)} />
                  <p className="logTitle Rosa">Ingresa el ID suministrado</p>
                  <input type="text" onChange={e => setId(e.target.value)} />
               </label>
            </div>
            <div>
               <button className="Rosa" type="submit" >Acceder</button>
            </div>
         </form>
      </div>
   );
}
