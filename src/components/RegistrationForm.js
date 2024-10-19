"use client";
import React, { useState } from 'react';
import Input from './Input';
import { useFetchDepartments } from '@/lib/colombia-data';
import Select from './Select';

const RegistrationForm = () => {
  const [sendCode, setSendCode] = useState(false);
  const [message, setMessage] = useState("");
  const { data, error, loading } = useFetchDepartments();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendCode(true);

    const code = crypto.randomUUID();
    const newMessage = `Felicidades, tu codigo para participar en el sorteo es ${code}`;
    setMessage(newMessage);
  };

  if (error) return <p>Hubo un error al cargar la información, por favor recargue la página</p>

  return (
    <div>
      {sendCode ?
        <p>{message}</p>
        :
        <form onSubmit={handleSubmit}>
          <Input
            nameLabel="Nombre"
            placeholder="Carlos"
            type="text"
          />
          <Input
            nameLabel="Apellido"
            placeholder="Sanchez"
            type="text"
          />
          <Input
            nameLabel="Cédula"
            placeholder="123456789"
            type="number"
          />
          <Select departmentsData={data} loading={loading} />
          <select>Ciudad</select>
          <Input
            nameLabel="Celular"
            placeholder="3200000000"
            type="number"
          />
          <Input
            nameLabel="Email"
            placeholder="carlossanchez@correo.com"
            type="email"
          />
          <input type="checkbox" required />
          <p>
            Autorizo el tratamiento de mis datos de acuerdo con la
            finalidad establecida en la política de protección de datos personales.
          </p>
          <button type="submit">Registrarse</button>
        </form>
      }
    </div>
  );
};

export default RegistrationForm;
