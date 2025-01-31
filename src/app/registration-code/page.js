import React from 'react';

const RegistrationCode = () => {
  const code = crypto.randomUUID();

  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold mb-4 lg:text-4xl'>Thank you for being a valued customer!</h1>
      <p className='text-gray-400 lg:text-2xl'>
        We are pleased to inform you that you have successfully registered for our exclusive offer for existing customers.
        As a thank you for your trust, this is your unique code to participate in the raffle:
      </p>
      <p className='text-3xl font-bold mb-4 lg:text-4xl text-[#1a80a3d9]'> {code}</p>
      <p className='text-gray-400 lg:text-2xl mt-4'>
        Do not forget to keep an eye out for our future launches and special promotions - your loyalty is our inspiration to keep improving!
      </p>
    </div>
  );
};

export default RegistrationCode;
