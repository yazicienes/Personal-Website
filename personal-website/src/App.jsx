import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  return (
    <div className="App">
      <section className="welcome-section">
      <h1>Welcome to My Shire</h1>
      <p>"Help me on my journey to destroy the code ring."</p>
      </section>
      <section className="about-section">
        <h2>About Section</h2>
        <p>Learn more about our awesome React app here.</p>
      </section>
      <section className="contact-section">
        <h2>Contact Section</h2>
        <p>Get in touch with us!</p>
      </section>
      <footer className="App-footer">
        <p>&copy; 2023 My React App</p>
      </footer>
    </div>
  );
};

export default App;
