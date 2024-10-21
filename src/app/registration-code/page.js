import React from 'react';

const RegistrationCode = () => {
  const code = crypto.randomUUID();

  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold mb-4 lg:text-4xl'>¡Gracias por ser un cliente valioso!</h1>
      <p className='text-gray-400 lg:text-2xl'>
        Nos complace informarte que te has registrado exitosamente para nuestra oferta exclusiva para clientes actuales.
        Como agradecimiento por tu confianza, este es tu código único para participar en el sorteo:
      </p>
      <p className='text-3xl font-bold mb-4 lg:text-4xl text-[#1a80a3d9]'> {code}</p>
      <p className='text-gray-400 lg:text-2xl mt-4'>
        No olvides estar atento a nuestros futuros lanzamientos y promociones especiales. ¡Tu lealtad es nuestra inspiración para seguir mejorando!
      </p>
    </div>
  );
};

export default RegistrationCode;
