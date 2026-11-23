import React from 'react';
import Hero from '../components/Hero';
import CompanyStats from '../components/CompanyStats';
import AboutUs from '../components/AboutUs';
import Portfolio from '../components/Portfolio';
import AIFilms from '../components/AIFilms';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage({ onOpenModal }) {
  return (
    <>
      <Hero onOpenModal={onOpenModal} />
      <CompanyStats />
      <AboutUs onOpenModal={onOpenModal} />
      <Portfolio onOpenModal={onOpenModal} />
      <AIFilms onOpenModal={onOpenModal} />
      <FAQ />
      <Contact />
    </>
  );
}
