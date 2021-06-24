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
      switch(Id){
         case "#$00":
            idx=0;
         break;
         case "#$01":
            idx=1;
         break;
         case "#$02":
            idx=2;
         break;
         case "#$03":
            idx=3;
         break;
         case "#$04":
            idx=4;
         break;
         case "#$05":
            idx=5;
         break;
         case "#$06":
            idx=6;
         break;
         case "#$07":
            idx=7;
         break;
         case "#$08":
            idx=8;
         break;
         case "#$09":
            idx=9;
         break;
         case "#$10":
            idx=10;
         break;
         case "#$11":
            idx=11;
         break;
         case "#$12":
            idx=12;
         break;
         case "#$13":
            idx=13;
         break;
         case "#$14":
            idx=14;
         break;
         case "#$15":
            idx=15;
         break;
         case "#$16":
            idx=16;
         break;
         case "#$17":
            idx=17;
         break;
         case "#$18":
            idx=18;
         break;
         case "#$19":
            idx=19;
         break;
         case "#$20":
            idx=20;
         break;
         case "#$21":
            idx=21;
         break;
         case "#$22":
            idx=22;
         break;
         case "#$23":
            idx=23;
         break;
         case "#$24":
            idx=24;
         break;
         case "#$25":
            idx=25;
         break;
         case "#$26":
            idx=26;
         break;
         case "#$27":
            idx=27;
         break;
         case "#$28":
            idx=28;
         break;
         case "#$29":
            idx=29;
         break;
         case "#$30":
            idx=30;
         break;
         case "#$31":
            idx=31;
         break;
         case "#$32":
            idx=32;
         break;
         case "#$33":
            idx=33;
         break;
         case "#$34":
            idx=34;
         break;
         case "#$35":
            idx=35;
         break;
         case "#$36":
            idx=36;
         break;
         default:
            Idd="#404"
         break;
      }
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
         alert("codigo aceptado");
         handleID(Id);
         /* history.push({
            pathname: '/ContactUS',
            state: {ID:Idd,param1:param1,param2:param2,param3:param3}
          }) */
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
