import { useState } from 'react';

export default function useToken() {
   const getToken = () => {
     const tokenString = sessionStorage.getItem('token');
     /* console.log("tokenString"+tokenString) */
     const userToken = JSON.parse(tokenString);
     /* console.log(userToken) */
     return userToken?.token
   };
   let [token, setToken] = useState(getToken());

   const saveToken = userToken => {
      sessionStorage.setItem('token', JSON.stringify(userToken));
      setToken(userToken.token);
      /* console.log("userToken es: " + userToken)
      console.log("userToken.token: " +userToken.token)
      console.log("token: " + token) */
      /* token=userToken; */
      /* console.log("token ahora: " +token) */
   };
   return{
      setToken: saveToken,token
   }
}