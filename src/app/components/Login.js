import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  const signIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });

    // auth.signInWithPopup(provider).catch((error) => alert(error.message))
  };
  return (
    <LoginContainer>
      <InnerLoginContainer>
        <img
          src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/slack-logo-slide.png"
          alt=""
        />
        <h1>Sign in to Slack-Clone</h1>
        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </InnerLoginContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const InnerLoginContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48;
    color: white;
  }
  > button:hover {
    background-color: rgb(25 118 210 / 95%);
  }
`;
