import React from 'react';
import mandala from '../../assets/images/mandala_opacity21.png';
import product from '../../assets/images/product.png';

function TodaysPick() {
  return (
    <div className="h-[100vh] bg-[#efdcdc] relative px-[5vw] border-2 border-solid border-t-[#aa1640]" style={{ backgroundImage: `url(${mandala})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right'}} >
      <div className="flex w-full justify-between">
        <div className="flex flex-col h-[75vh] justify-between pt-[25vh]">
          <h3 className="font-mundial font-extralight">TODAY&apos;S FAVORITE PICK</h3>
          <div>
            <h2 className="text-6xl">Product Title</h2>
            <p>Product Description</p>
            <button>Call To Action</button>
          </div>
        </div>
        <div className="pt-[25vh]">
          <div className="flex justify-around w-[55vw]">
            <img src={product} alt="product" className="h-96" />
            <img src={product} alt="product" className="h-96" />
            <img src={product} alt="product" className="h-96" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default TodaysPick;
