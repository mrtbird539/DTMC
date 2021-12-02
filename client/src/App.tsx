import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bulma/css/bulma.min.css';
import './components.css';
import './App.css';

import { Header } from './components/header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer';
import { DropDown } from './components/dropDown';

import { GaragePage } from "./pages/Garage";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        {/* <DropDown /> */}
        {/* Router pages here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myGarage" element={<GaragePage />} />
        </Routes>
        <Footer footer={"The Car Experts: Josef Siraco - Kelley McDonnell - Jef Mitchell - Tyler Smith - Alex Parker - &copy; 2021"} />
      </div>
    </BrowserRouter>
  );
}

export default App;
