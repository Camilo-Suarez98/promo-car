import React from 'react';

const SelectCity = ({ citiesData, loading, departmentSelected }) => {
  const applyFilter = citiesData.filter(city => {
    return city.departamento === departmentSelected;
  });

  const sortedCities = applyFilter.sort((a, b) => {
    if (a.municipio < b.municipio) return -1;
    if (a.municipio > b.municipio) return 1;
    return 0;
  });

  return (
    <select className='w-full py-3 px-4 my-2 bg-[#111827] text-[#f3f4f6] rounded-md border-[1px] border-[#f3f4f6] focus:border-[#1a80a3d9]' required>
      {
        departmentSelected === '' && loading
          ? <option value="">Cargando ciudades</option>
          : <>
            <option value="">Ciudad</option>
            {sortedCities.map((region, index) => {
              return (
                <option key={index} value={region.municipio}>{region.municipio}</option>
              )
            })}
          </>
      }
    </select>
  )
}

export default SelectCity;
