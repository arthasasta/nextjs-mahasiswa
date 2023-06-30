import React from 'react';
import Navbar from './Navbar';
import HeroSections from './HeroSections';
import Barang from './Barang';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSections />
      <Barang />
      <Footer />
    </>
  );
};

export default Home;
