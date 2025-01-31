"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFecthCities, useFetchDepartments } from '@/lib/colombia-data';
import Input from './Input';
import SelectDepartment from './SelectDepartment';
import SelectCity from './SelectCity';

const RegistrationForm = () => {
  const [department, setDepartment] = useState('');
  const [error, setError] = useState({
    name: '',
    lastName: '',
    phone: '',
    document: '',
    email: ''
  });
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    phone: '',
    document: '',
    email: ''
  });
  const { departmentdata, departmentsError, loading } = useFetchDepartments();
  const { citiesData, citiesError, loadingCities } = useFecthCities(department);
  const router = useRouter();


  const nameRegex = /^[a-zA-Z\s]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const documentRegex = /^[0-9]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.name || !nameRegex.test(formValues.name)) {
      newErrors.name = 'The name is invalid. Only letters are allowed';
    }

    if (!formValues.lastName || !nameRegex.test(formValues.lastName)) {
      newErrors.lastName = 'The surname is invalid. Only letters are allowed';
    }

    if (!formValues.document || !documentRegex.test(formValues.document)) {
      newErrors.document = 'The document is invalid. Only numbers are allowed';
    }

    if (!formValues.phone || !phoneRegex.test(formValues.phone)) {
      newErrors.phone = 'The cellphone is invalid. It must have 10 digits';
    }

    if (!formValues.email || !emailRegex.test(formValues.email)) {
      newErrors.email = 'The email is invalid.';
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      router.push('/registration-code');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  if (departmentsError) return <p>Hubo un error al cargar los departamentos</p>;
  if (citiesError) return <p>Hubo un error al cargar los municipios</p>;

  return (
    <div className='w-full'>
      <form className='p-4 bg-[#111827] text-[#f3f4f6] rounded-xl md:p-8' onSubmit={handleSubmit}>
        <Input
          nameLabel="Name"
          placeholder="Charles"
          inputName="name"
          type="text"
          value={formValues.name}
          onChange={handleInputChange}
        />
        {error.name && <p className="text-red-500">{error.name}</p>}

        <Input
          nameLabel="Surname"
          placeholder="Gardfield"
          inputName="lastName"
          type="text"
          value={formValues.lastName}
          onChange={handleInputChange}
        />
        {error.lastName && <p className="text-red-500">{error.lastName}</p>}

        <Input
          nameLabel="Document"
          placeholder="123456789"
          inputName="document"
          type="number"
          value={formValues.document}
          onChange={handleInputChange}
        />
        {error.document && <p className="text-red-500">{error.document}</p>}

        <SelectDepartment
          departmentsData={departmentdata}
          loading={loading}
          setDepartmentSelected={setDepartment}
        />

        <SelectCity
          citiesData={citiesData}
          loading={loadingCities}
          departmentSelected={department}
        />

        <Input
          nameLabel="Cellphone"
          placeholder="5555555555"
          inputName="phone"
          type="number"
          value={formValues.phone}
          onChange={handleInputChange}
        />
        {error.phone && <p className="text-red-500">{error.phone}</p>}

        <Input
          nameLabel="Email"
          placeholder="charlesgarfield@email.com"
          inputName="email"
          type="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        {error.email && <p className="text-red-500">{error.email}</p>}

        <div className='flex mt-2'>
          <p>
            <input type="checkbox" required />{" "}
            I authorise the processing of my personal data in accordance with the purpose
            purpose set out in the personal data protection policy.
          </p>
        </div>

        <button
          type="submit"
          className='bg-[#1a80a3d9] p-3 rounded-md w-full mt-3 text-white font-semibold'
        >
          Sing up
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
