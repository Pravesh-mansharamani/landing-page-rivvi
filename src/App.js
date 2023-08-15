import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Contact from './components/Contact';
import Payment from './components/Payment';
import Footer from './components/Footer';
import Feature from './components/Feature';




function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section/>
      <Feature/>
      <Contact/>
      <Payment/>
      <Footer/>
    </div>
  );
}

export default App;
