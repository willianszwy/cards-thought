import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import OracleCard from './components/OracleCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      
      <div className="container">
        <header>
          <h1 className="app-title">Inner Thought</h1>
          <p className="app-subtitle">It brings to light what your soul already knows</p>
        </header>

        <main>
          <OracleCard />
        </main>
      </div>
    </div>
  );
}

export default App;