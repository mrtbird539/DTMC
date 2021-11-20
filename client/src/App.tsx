import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import { Header } from './components/header';
import { Navbar } from './components/Navbar';
import { Body } from './components/body';
import { CarCard } from './components/carCard';
import { Footer } from './components/footer';
import { DropDown } from './components/dropDown';

let coolArray: number[] = []
coolArray = [1, 2, 3, 4, 5]


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <DropDown />
      <Body />
      <CarCard title={"Corgi Mobile"} modTitle={"Huge Spoiler, Chunky Exhaust, Removed Governer"} modList={["cut pipe", "kibble compartment", "transitional windshield"]}/>
      <br />
      <Footer footer={"CAR STUFF"} />
    </div>
  );
}

export default App;
