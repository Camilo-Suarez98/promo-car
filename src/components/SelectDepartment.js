import React, { useState } from 'react';

const SelectDepartment = ({ departmentsData, loading, setDepartmentSelected }) => {
  const sortedDepartments = departmentsData.sort((a, b) => {
    if (a.departamento < b.departamento) return -1;
    if (a.departamento > b.departamento) return 1;
    return 0;
  })

  return (
    <select className='text-black' onChange={(e) => setDepartmentSelected(e.target.value)} required>
      {
        loading
          ? <option value="">Cargando departamentos</option>
          : <>
            <option value="">Departamento</option>
            {sortedDepartments.map((region, index) => {
              return (
                <option
                  key={index}
                  value={region.departamento}
                >
                  {region.departamento}
                </option>
              )
            })}
          </>
      }
    </select>
  )
}

export default SelectDepartment;
