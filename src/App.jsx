import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './shared_components/Navbar';
import Quote from './components/Quote';
import Home from './components/Home';
import AboutAyurveda from './components/AboutAyurveda';
import DoshaDetails from './components/DoshaDetails';
import DoshaQuiz from './components/DoshaQuiz';

export const App = () => (
  <Router>
    <div className="flex-col items-center snap-y overflow-y-scroll h-[100vh]">
      <Navbar />
      <Routes>
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quote" element={<Quote />} />
        <Route exact path="/ayurveda" element={<AboutAyurveda />} />
        <Route exact path=":dosha_id" element={<DoshaDetails />} />
        <Route exact path="/doshaQuiz" element={<DoshaQuiz />} />
      </Routes>
    </div>
  </Router>
);

export default App;
