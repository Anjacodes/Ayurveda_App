import React from 'react';
import AboutAyurvedaHome from './AboutAyurvedaHome';
import DoshasHome from './DoshasHome';
import TodaysPick from './TodaysPick';
import WelcomeScreen from './WelcomeScreen';
import WhereTo from './WhereTo';

const Home = () => (
  <div>
    <WelcomeScreen />
    <AboutAyurvedaHome />
    <DoshasHome />
    <WhereTo />
    <TodaysPick />
  </div>
);

export default Home;
