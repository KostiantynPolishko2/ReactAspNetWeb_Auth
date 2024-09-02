import React, { FC, FunctionComponentElement, useState, useEffect } from 'react';
import { LoginWrapper } from './Login.styled';
import axios from 'axios';

interface LoginProps {}

const Login: FC<LoginProps> = (): FunctionComponentElement<LoginProps> => {

   const [userName, setUserName] = useState<string>("none");
   const [password, setPassword] = useState<string>("none");

   const handleUserName = (e: React.FormEvent<HTMLElement>): void => {
      setUserName((e.currentTarget as HTMLInputElement).value);

      console.log('user name', userName);
   }

   const handlePassword = (e: React.FormEvent<HTMLElement>): void => {
      setPassword((e.currentTarget as HTMLInputElement).value);

      console.log('password', password);
   }

   const hadleSubmit = (e: React.FormEvent<HTMLElement>): void => {
      e.preventDefault();

      const loginCredentials = {
         _userName: userName,
         _password: password
      };

      console.log('call form submit', userName, password);

      axios.post("https://localhost:7191/authenticate", loginCredentials)
      .then((responce) => {
         const token = responce.data;

         console.log('get token', token)
      })
      .catch();
   }

   useEffect(() => {hadleSubmit}, []);

   
   return (
      <LoginWrapper>
         <p>Login Page</p>
         <form onSubmit={hadleSubmit}>
           <label>
              User Name:
              <input type="text" placeholder={userName} onBlur={handleUserName}/>
           </label>
           <label>
              Password:
              <input type="text" placeholder={password} onBlur={handlePassword}/>
           </label>
           <input type="submit" value="Submit"/>
         </form>
      </LoginWrapper>
     );
}

export default Login;
