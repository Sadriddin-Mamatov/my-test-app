import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import useScrollRestoration from './hooks/useScrollRestoration';

import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
      <Router>
        <ScrollRestorationWrapper />
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  );
}

const ScrollRestorationWrapper = () => {
  useScrollRestoration();
  return null;
};
export default App;
