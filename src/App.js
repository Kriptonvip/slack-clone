import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './app/components/Header';
import SideBar from './app/components/SideBar';
import styled from 'styled-components';
import Chat from './app/components/Chat';


// import { Counter } from './features/counter1/Counter';

function App() {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <SideBar />
        <Routes>
          <Route path="/" exact />
          
        </Routes>
        <Chat/>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
