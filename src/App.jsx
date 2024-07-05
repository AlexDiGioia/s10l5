import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import WeatherComponent from './components/WeatherComponent';
import Research from './components/Research';
import SearchedCity from './components/SearchedCity';

function App() {
  const handleSearch = (query) => {
    console.log('Query di ricerca:', query);
  };

  return (
    <Container fluid>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Research onSearch={handleSearch} />}></Route>
      <Route path="/research/:index" element={<SearchedCity/>}></Route>
    </Routes>
    </BrowserRouter>
    
      
      <WeatherComponent />
      
    </Container>
  );
}

export default App;