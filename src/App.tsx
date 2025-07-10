import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Method from './components/Method';
import Packages from './components/Packages';
import ComparisonTable from './components/ComparisonTable';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Founders from './components/Founders';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problems />
      <Method />
      <Packages />
      <ComparisonTable />
      <Testimonials />
      <FAQ />
      <Founders />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;