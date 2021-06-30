import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Forms from '../Form/Form';
/* import GlobalState from '../../globalState'; */
import useToken from '../Hooks/useToken';
import DigitalAssets from '../digitalAssets/digitalAssets';



export default function ContactUS(props){
   /* const {token: globalToken} =useContext(GlobalState); */
   let { token } = useToken();
   let param1 = props.location.state.param1;
   let param2 = props.location.state.param2;
   let param3 = props.location.state.param3;
   let ID = props.location.state.ID;
   const [fName, setFName ] = useState('');
   const [fFollowers, setFollowers ] = useState('');
   const [fNick, setfNick ] = useState('');
   useEffect(() => {
      /*http://localhost/ */
      /*/api/ */
      axios.post('http://localhost/',{
         nick: param3,
      }).then(res=>{
         console.log(res.data.twitter.name)
         setFName(res.data.twitter.name);
         console.log(res.data.twitter.screen_name)
         setfNick(res.data.twitter.screen_name)
         console.log(res.data.twitter.followers_count)
         setFollowers(res.data.twitter.followers_count);
      }).catch(err=>{
         console.error(err)
      })
   },[param3])
   if(!token){
      return(
         <Forms param1={param1} param2={param2} ID={ID}/>
      );
   }
   return(
      <React.Fragment>
         <DigitalAssets fName={fName} fFollowers={fFollowers} fNick={fNick} nick={param3}  ID={ID} param1={param1} param2={param2} />
      </React.Fragment>
   );
}
