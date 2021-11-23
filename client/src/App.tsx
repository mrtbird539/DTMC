import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import { Header } from './components/header';
import { Navbar } from './components/Navbar';
import { Body } from './components/body';
import { CarCard } from './components/carCard';
import { EditCard } from './components/editCard';
import { Footer } from './components/footer';
import { DropDown } from './components/dropDown';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <DropDown />
      <Body />
      <CarCard title={"Corgi Mobile"} mods={"Huge Spoiler, Chunky Exhaust, Removed Governer"}/>
      <EditCard title={"Corgi Mobile"} mods={"Huge Spoiler, Chunky Exhaust, Removed Governer"}/>
      <br />
      <Footer footer={"CAR STUFF"} />
    </div>
  );
}

export default App;
