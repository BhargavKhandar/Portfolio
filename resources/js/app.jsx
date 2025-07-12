// app.jsx
import '../css/app.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import InternshipTraining from './components/InternshipTraining';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Projects projects={projects} />
      <InternshipTraining />
      <Contact />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<App />);
