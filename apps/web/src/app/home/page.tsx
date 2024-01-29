import React from 'react';
import HeroHome from './components/HeroHome';
import FeatureProduct from '@/components/FeatureProduct';
import TopProduct from '@/components/TopProduct';
import NewsEvent from '@/components/NewsEvent';
import Contact from '@/components/Contact';

const Homepage = () => {
  return (
    <div>
      <HeroHome />
      <FeatureProduct />
      <TopProduct />
      <NewsEvent />
      <Contact />
    </div>
  );
};

export default Homepage;
