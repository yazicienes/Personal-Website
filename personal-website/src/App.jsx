import React, { useEffect, useState } from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Frodo's House Section */}
      <section id="welcome">
        <div className="map" style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
        <div id="welcome-content">
          <h1>Welcome to My Shire</h1>
          <p>"Help me on my journey to destroy the code ring."</p>
        </div>
        <div id="frodo" style={{ right: `${80 + scrollY * 0.2}%` }} />
      </section>

      {/* Fellowship Section */}
      <section id="name-position">
        <h1>Your Name</h1>
        <p>Your Position</p>
      </section>

      {/* Firework Animation */}
      <div id="firework" className={scrollY > 500 ? 'active' : ''} />
    </div>
  );
};

export default App;
