import React from 'react';

import Hero from './Hero';
import Team from './Team';

import Navbar from '../Navbar';
import Footer from '../Footer';

function AboutPage() {
  return ( 
    <>
        <h1>About Page</h1>
        <Navbar />
        <Hero />
        <Team />
        <Footer />
    </>
   );
}

export default AboutPage;