import React from 'react';
import lotus from '../../assets/images/lotus.png';

function AboutAyurvedaHome() {
  return (
    <div className="h-[100vh] bg-[#f3efeb] text-center px-[15%] border-2 border-solid border-b-[#aa1640]">
      <div className="flex justify-center items-baseline">
        <img src={lotus} alt="lotus" className="h-10" />
        <h2 className="pt-[30vh] font-elanor text-6xl mb-20 mx-12">Ayurveda</h2>
        <img src={lotus} alt="lotus" className="h-10" />
      </div>
      <p className="mb-8 font-mundial text-xl leading-loose">The Sanskrit term Ayurveda translates to “knowledge of life,” and the principles of this ancient wisdom remind us that the entire web of life is intricately interwoven. With a unique emphasis on total wellness, the art and science of Ayurveda work to harmonize our internal and external worlds.</p>
      <a className="rounded-lg bg-[#aa1640] text-[#f3efeb] font-mundial p-2 hover:bg-[#b4aa49]" href="/ayurveda">LEARN MORE</a>
    </div>
  );
}

export default AboutAyurvedaHome;
