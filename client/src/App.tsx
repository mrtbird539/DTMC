import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bulma/css/bulma.min.css';
import './components.css';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Header } from './components/header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer';

import { GaragePage } from "./pages/Garage";
import { HomePage } from "./pages/Home";

  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navbar />
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
