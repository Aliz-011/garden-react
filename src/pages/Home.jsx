import React from 'react';
import {
  Hero,
  Navbar,
  Categories,
  Landscape,
  Recommendation,
} from '../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container max-w-5xl mx-auto">
        <div className="py-4" />
        <Hero />
        <div className="py-5" />
        <Categories />
        <div className="py-5" />
        <Landscape />
        <div className="py-5" />
        <Recommendation />
      </main>
    </>
  );
};

export default Home;
