import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './shared_components/Navbar';
import Home from './components/Home/Home';
import AboutAyurveda from './components/AboutAyurveda';
import DoshaDetails from './components/DoshaDetails';
import DoshaQuiz from './components/DoshaQuiz';
import Footer from './shared_components/Footer';

export const App = () => (
  <Router>
    <div className="flex-col items-center snap-y overflow-y-scroll h-[100vh] overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ayurveda" element={<AboutAyurveda />} />
        <Route exact path=":dosha_id" element={<DoshaDetails />} />
        <Route exact path="/dosha_quiz" element={<DoshaQuiz />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
