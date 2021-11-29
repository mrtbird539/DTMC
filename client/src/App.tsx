import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bulma/css/bulma.min.css';
import 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Shippori+Antique+B1&display=swap';
import './components.css';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Header } from './components/header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer';
import { DropDown } from './components/dropDown';

import { GaragePage } from "./pages/Garage";
import { HomePage } from "./pages/Home";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
          <Footer footer={"CAR STUFF"} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
