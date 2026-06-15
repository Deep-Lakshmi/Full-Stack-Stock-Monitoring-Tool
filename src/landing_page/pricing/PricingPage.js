import React from 'react';

import Hero from './Hero';
import Brojkerage from './Brojkerage';

import Navbar from '../Navbar';
import Footer from '../Footer';

function PricingPage() {
  return ( 
    <>
      <Navbar />
      <h1>Pricing Page</h1>
      <Hero />
      <Brojkerage />
      <Footer />
    </>
   );
}

export default PricingPage;