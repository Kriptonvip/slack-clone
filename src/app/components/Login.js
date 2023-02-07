import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function Login() {
  const signIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
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
`;
