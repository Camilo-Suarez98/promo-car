"use client";
import React, { useState } from 'react';

import { useFecthCities, useFetchDepartments } from '@/lib/colombia-data';
import Input from './Input';
import SelectDepartment from './SelectDepartment';
import SelectCity from './SelectCity';

const RegistrationForm = () => {
  const [sendCode, setSendCode] = useState(false);
  const [message, setMessage] = useState("");
  const [department, setDepartment] = useState('');
  const { departmentdata, departmentsError, loading } = useFetchDepartments();
  const { citiesData, citiesError, loadingCities } = useFecthCities(department);

  console.log(citiesData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendCode(true);

    const code = crypto.randomUUID();
    const newMessage = `Felicidades, tu codigo para participar en el sorteo es ${code}`;
    setMessage(newMessage);
  };

  if (departmentsError) return <p>Hubo un error al cargar los departamentos</p>;
  if (citiesError) return <p>Hubo un error al cargar los municipios</p>;

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
          <SelectDepartment
            departmentsData={departmentdata}
            loading={loading}
            setDepartmentSelected={(setDepartment)}
          />
          <SelectCity
            citiesData={citiesData}
            loading={loadingCities}
            departmentSelected={department}
          />
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
          <div className='flex'>
            <input type="checkbox" required />
            <p>
              Autorizo el tratamiento de mis datos de acuerdo con la
              finalidad establecida en la política de protección de datos personales.
            </p>
          </div>
          <button type="submit">Registrarse</button>
        </form>
      }
    </div>
  );
};

export default RegistrationForm;
