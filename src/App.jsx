import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Calculator } from './components/Calculator';
import Navbar from './shared_components/Navbar';
import Quote from './components/Quote';
import Home from './components/Home';

export const App = () => (
  <Router>
    <div className="flex flex-col items-center">
      <Navbar />
      <Routes>
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </Router>
);

export default App;
