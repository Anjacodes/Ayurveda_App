import React from 'react';
import frame from '../assets/images/frame.png';

function WhereTo() {
  return (
    <div className="h-[100vh] bg-[#f3efeb] flex flex-col items-center pt-[10vh] relative">
      <h2 className="absolute top-[20vh] text-6xl">Where to next?</h2>
      <div className="w-[100vw] relative">
       <div className="group">
          <img src={frame} alt="frame" className="absolute top-[13vh] left-[5.5vw] h-[75vh] z-10 -rotate-12 hidden group-hover:block"/>
          <h3 className="text-white text-7xl font-bold absolute top-[50vh] left-[19vw] z-20">foods</h3>
          <div className="absolute left-[-25vw] mask mask1" />
       </div>
        <div className="group">
          <img src={frame} alt="frame" className="absolute top-[13vh] right-[5.5vw] h-[75vh] z-10 rotate-12 hidden group-hover:block"/>
          <h3 className="text-white text-7xl font-bold absolute top-[50vh] right-[17vw] z-20">recipes</h3>
          <div className="absolute right-[-25vw] mask mask2" />
        </div>
      </div>
    </div>
  );
}

export default WhereTo;
