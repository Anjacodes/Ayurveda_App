import React from 'react';
import backgroundVideo from '../assets/meditation.mp4';

function WelcomeScreen() {
  return (
    <div>
      <h2 className="text-right text-[6rem] font-elanor w-[51%] text-white fixed top-[30vh] right-0 mr-[5%]">
        Life is
        <span className="font-mundial"> not </span>
        merely to be alive, but to be
        <span className="font-mundial"> well.</span>
      </h2>
      <video muted loop autoPlay className="h-full">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default WelcomeScreen;
