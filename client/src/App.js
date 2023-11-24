import React from 'react';
import Navbar from './component/NavBar/NavBar';
import Footer from './component/NavBar/Footer';
import Router from './Route.js';
import MainPage from './component/MainPage/MainPage';


function App() {

  return (
    <div className="App">
    <Navbar />
    <MainPage />
    <Footer />
    </div>
  );
}

export default App;
