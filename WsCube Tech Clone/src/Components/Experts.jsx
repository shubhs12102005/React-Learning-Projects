import React from 'react';

function Experts() {
  return (
    <div className="p-3 max-w-screen-xl my-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Image Section */}
      <div className="w-[60%] md:w-[80%] mx-auto">
        <img src="./laptop.jpg" alt="Laptop" className="w-full h-auto object-cover" />
      </div>
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center text-center md:text-left">
        <h1 className="text-[#00df9a] font-bold text-2xl md:text-3xl">
          LEARN FROM EXPERTS
        </h1>
        <p className="my-4 text-justify  text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in
          voluptate nemo, nisi reiciendis saepe expedita eaque possimus commodi mollitia
          alias sit tempore voluptatem. Qui quia similique minima eligendi quisquam?
        </p>
        <button className='mt-4 p-3 px-4 rounded-md text-white bg-black'>Get Started</button>

      </div>
    </div>
  );
}

export default Experts;
