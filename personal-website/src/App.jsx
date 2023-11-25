import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <section className="main-section">
        <h2>Main Section</h2>
        <p>This is the main content of the app.</p>
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
