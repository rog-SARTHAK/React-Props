import React from "react";

import './App.css';

import  NetflixSeries, { Footer, Header } from "./components/NetflixSeries";
//default export doesnt need {}
//only named export requires {}

function App() {
  return (
    
    <React.Fragment>

    <Header />
    <NetflixSeries />
    <Footer />

    </React.Fragment>
    
  );
};

export default App;