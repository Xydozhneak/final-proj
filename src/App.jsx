import NavBar from './components/NavBar';
import React from 'react';
import './App.css';
import MainConteiner from './pages/MainConteiner';
import Footer from './components/Footer';
import MainPageClass from './pages/MainPageClass';

function App() {
  return (
    <div >
      <NavBar />
      <MainPageClass />
       <Footer />
    </div>
  );
}

export default App;

