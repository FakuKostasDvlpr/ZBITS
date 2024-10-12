import React from 'react'
import { useEffect } from 'react';
function ButtonToTop() {
    const scrollToTop = () => {
        const scrollDuration = 500; 
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
      };
    
      useEffect(() => {
        const button = document.getElementById('scrollToTopBtn');
    
        const handleScroll = () => {
          if (window.scrollY > 300) {
            button.style.display = 'block';
          } else {
            button.style.display = 'none';
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
    <div>
      <button 
        id="scrollToTopBtn" 
        onClick={scrollToTop} 
        className="fixed bottom-10 right-10 w-full max-w-[40px] transition duration-300 bg-[#580203] text-white p-3 rounded-full shadow-lg"
        style={{ display: 'none' }} 
      >
        ↑
      </button>
    </div>
  )
}

export default ButtonToTop
