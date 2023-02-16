import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CustomerDetails from './pages/CustomerDetails';

const App: React.FC = () => {

  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
        {/* <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} /> */}
      </Routes>

  );
}

export default App;
