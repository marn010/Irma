import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Forms from '../Form/Form';
/* import GlobalState from '../../globalState'; */
import useToken from '../Hooks/useToken';



export default function ContactUS(props){
   /* const {token: globalToken} =useContext(GlobalState); */
   let { token } = useToken();
   let param1 = props.location.state.param1;
   let param2 = props.location.state.param2;
   let param3 = props.location.state.param3;
   const [fName, setFName ] = useState('');
   
   useEffect(() => {
      axios.post('http://localhost/',{
         nick: param3,
      }).then(res=>{
         console.log(res.data)
      }).catch(err=>{
         console.error(err)
      })
   },[])
   if(!token){
      return(
         <Forms param1={param1} param2={param2}/>
      );
   }
   return(
      <React.Fragment>
         <p>it works!</p>
         <p> aqui pondria mas informacion si tuviera.</p>
         <p>Nombre:  {param3} </p>
      </React.Fragment>
   );
}
/*
() => {
      debugger;
     
      const result =  axios.get(
         'https://api.twitter.com/1.1/users/show.json?screen_name=marn010',{ 
            headers:{
               'Authorization' : 'Bearer AAAAAAAAAAAAAAAAAAAAAKrmQQEAAAAA%2Bi40vtGEi9JD%2FW4U65TKb%2FUB8k4%3DSXD7Ou10jvzlNy08UsDpT4anNrTs2hGW6Atwl3Fw4TTZK4ziVn'
         }
      })
      .then((res) =>{
         setFName(res.data);
         debugger;
         console.log(res.data)
      })
      .catch((error)=>{
         debugger;
         console.error(error)
      })
   }
 */