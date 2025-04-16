import React, { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Features } from './components/sections/Features';
import { AboutUs } from './components/sections/AboutUs';
import { Footer } from './components/layout/Footer';

function App() {
  // Função para animar elementos ao scroll com throttling para melhor performance
  useEffect(() => {
    let isThrottled = false;
    const throttleTime = 100; // ms
    
    const animateOnScroll = () => {
      if (isThrottled) return;
      
      isThrottled = true;
      
      // Usando requestAnimationFrame para sincronizar com repaint do navegador
      window.requestAnimationFrame(() => {
        const elements = document.querySelectorAll('.fade-in-animation');
        
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
          }
        });
        
        setTimeout(() => {
          isThrottled = false;
        }, throttleTime);
      });
    };
    
    window.addEventListener('scroll', animateOnScroll, { passive: true });
    // Trigger once on load
    animateOnScroll();
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-navy text-gray-100 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;