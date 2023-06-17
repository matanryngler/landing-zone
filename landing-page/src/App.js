import React from 'react';
import './App.css';
import Header from './components/Header';
// import CarouselSection from './components/CarouselSection';
import MainContent from './components/MainContent';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <CarouselSection /> */}
      <MainContent />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
