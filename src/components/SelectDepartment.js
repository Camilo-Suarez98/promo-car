import React, { useState } from 'react';

const SelectDepartment = ({ departmentsData, loading, setDepartmentSelected }) => {
  const sortedDepartments = departmentsData.sort((a, b) => {
    if (a.departamento < b.departamento) return -1;
    if (a.departamento > b.departamento) return 1;
    return 0;
  })

  return (
    <select className='w-full py-3 px-4 my-2 bg-[#111827] text-[#f3f4f6] rounded-md border-[1px] border-[#f3f4f6] focus:border-[#1a80a3d9]' onChange={(e) => setDepartmentSelected(e.target.value)} required>
      {
        loading
          ? <option value="">Loading States</option>
          : <>
            <option value="">State</option>
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
