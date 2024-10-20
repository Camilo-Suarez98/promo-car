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
    <select className='text-black' required>
      {
        departmentSelected === ''
          ? <option value="">Ciudad</option>
          : loading
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
