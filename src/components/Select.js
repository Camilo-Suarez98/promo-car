import React from 'react'

const Select = ({ departmentsData, loading }) => {
  const sortedDepartments = departmentsData.sort((a, b) => {
    if (a.departamento < b.departamento) return -1;
    if (a.departamento > b.departamento) return 1;
    return 0;
  })

  return (
    <select className='text-black' required>
      {
        loading
          ? <option value="">Cargando departamentos</option>
          : <>
            <option value="">Seleccione un departamento</option>
            {sortedDepartments.map((region, index) => {
              return (
                <option key={index} value={region.departamento}>{region.departamento}</option>
              )
            })}
          </>
      }
    </select>
  )
}

export default Select;
