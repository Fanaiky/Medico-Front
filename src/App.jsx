import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from './pages/Home';
import Login from './pages/Login';
import Catalogue from './pages/Catalogue';
import Panier from './pages/Panier';
import Factures from './pages/Factures';
import ProfilClient from './pages/ProfilClient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/factures" element={<Factures />} />
          <Route path="/profil" element={<ProfilClient />} />
          <Route path="/panier" element={<Panier />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;