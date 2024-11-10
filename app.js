// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Custom CSS styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '800px',
    padding: '10px',
  },
  nav: {
    marginBottom: '20px',
  },
  navLink: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#007acc',
  },
  activeLink: {
    fontWeight: 'bold',
    color: '#005f99',
  },
  page: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    boxSizing: 'border-box',
  },
};

// Components for pages
const Home = () => (
  <div style={styles.page}>
    <h1>Home Page</h1>
    <p>Welcome to our simple multi-page React website!</p>
  </div>
);

const About = () => (
  <div style={styles.page}>
    <h1>About Us</h1>
    <p>Learn more about what we do and who we are.</p>
  </div>
);

const Contact = () => (
  <div style={styles.page}>
    <h1>Contact Us</h1>
    <p>Get in touch with us via email or phone.</p>
  </div>
);

// Main App component
const App = () => (
  <Router>
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
        <Link to="/contact" style={styles.navLink}>Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
