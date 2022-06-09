import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/meditation.mp4';

function WelcomeScreen() {
  return (
    <div className="relative">
      <h2 className="text-right text-[6rem] font-elanor w-[51%] text-white absolute top-[20vh] right-0 mr-[5%]">
        Life is
        <span className="font-mundial"> not </span>
        merely to be alive, but to be
        <span className="font-mundial"> well.</span>
      </h2>
     <div className="absolute left-[5vw] top-[90vh] flex items-center">
        <h3 className="text-white font-mundial text-xl mr-6">Not sure what your dosha is?</h3>
        <Link className="rounded-lg bg-[#aa1640] text-[#f3efeb] font-mundial z-10000 p-2 hover:bg-[#b4aa49]" to="/doshaQuiz">TAKE THE QUIZ</Link>
     </div>
      <video muted loop autoPlay className="h-full">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default WelcomeScreen;
