import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './app/components/Header';
import SideBar from './app/components/SideBar';
import styled from 'styled-components';
import Chat from './app/components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './app/components/Login';

// import { Counter } from './features/counter1/Counter';

function App() {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  return (
    <div className="app">
      
        {!user ? (
          <Routes>
          <Route path="/" element={<Login/>}></Route>
          </Routes>
        ) : (
          <>
            <Header />
            <AppBody>
              <SideBar />
              <Chat />
            </AppBody>
          </>
        )}

    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
