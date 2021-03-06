import React from 'react';
import './App.css';
import Routes from './routes';
import UserProvider from './providers/UserProvider';

function App() {
  return (
    <UserProvider>
      <Routes/>
    </UserProvider>
  );
}

export default App;
