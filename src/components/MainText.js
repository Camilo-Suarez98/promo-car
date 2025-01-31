import React from 'react';
import Image from "next/image";

const MainText = () => {
  return (
    <div className='text-center mb-5 lg:text-left'>
      <h1 className="text-3xl font-bold mb-4 lg:text-4xl">Register to take part in the raffle!</h1>
      <p className="text-gray-400 lg:text-2xl">
        Fill in the form below with your details to get your participation code.
        You only need a few minutes to complete the registration - good luck!
      </p>
      <Image
        className='m-auto lg:m-0 lg:w-full'
        src="/car.png"
        alt="Cars image"
        width={500}
        height={200}
      />
    </div>
  );
};

export default MainText;
