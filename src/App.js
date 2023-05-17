
import './App.css';
import Footer from './fragments/Footer';
import Chefs from './fragments/Chefs';
import Download from './fragments/Download';
import Menu from './fragments/Menu';
import Navbar from './fragments/Navbar';
import PopularDishes from './fragments/PopularDishes';
import Reservation from './fragments/Reservation';
import Reviews from './fragments/Reviews';
import Services from './fragments/Services';
import TopSection from './fragments/TopSection';
// import  { useState } from 'react';
import ReactDOM from 'react-dom'


function App() {
 
  return (
    <>
    <Navbar/>
    <TopSection/>
    <PopularDishes/>
    <Services/>
    <Menu/>
    <Reservation/>
    <Reviews/>
    <Chefs/>
    <Download/>
    <Footer/>
    </>
  );
}

export default App;
