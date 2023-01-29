import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
// import { Counter } from './features/counter1/Counter';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Header/>}/>  
        </Routes>
    </div>
  );
}

export default App;
