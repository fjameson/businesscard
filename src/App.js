import React , { Component}  from 'react';
import Info from './components/info.js';
import About from './components/about.js';
import Interests from './components/interests';
import Footer from './components/footer';

function App() {
  return (
    <div className="card">
      <div className="card-content">
        <Info />
        <div className="card-text">
          <About />
          <Interests />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
