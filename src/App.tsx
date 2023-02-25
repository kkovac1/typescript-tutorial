import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CustomerDetails from './pages/CustomerDetails';
import NavBar from './components/NavBar';

const App: React.FC = () => {

  return (
    <><NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
      </Routes></>
  );
}

export default App;
