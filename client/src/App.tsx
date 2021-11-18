import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import { Header } from './components/header';
import { Navbar } from './components/Navbar';
import { Body } from './components/body';
import { CarCard } from './components/carCard';
import { Footer } from './components/footer';

let coolArray: number[] = []
coolArray = [1, 2, 3, 4, 5]


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />
      <CarCard title={"Corgi Mobile"}/>
      <br />
      <Footer footer={"CAR STUFF"} />
    </div>
  );
}

export default App;
