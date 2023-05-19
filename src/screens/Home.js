import React from 'react'

import Footer from "../components/Footer";
import NavBars from '../components/NavBars';
import Crousels from "../components/Crousels";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div>
        <NavBars/>
        <Crousels/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home