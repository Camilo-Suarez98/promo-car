import { useEffect, useState } from "react";

const url = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';

export const useFetchDepartments = () => {
  const [departmentdata, setDepartmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [departmentsError, setDepartmentsError] = useState();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await fetch(url);
        const res = await data.json();

        const filteredDepartments = Array.from(
          new Set(res.map(dept => dept.departamento))
        ).map(departmentName => {
          return res.find(dept => dept.departamento === departmentName);
        });

        setDepartmentData(filteredDepartments);
      } catch (error) {
        setDepartmentsError(error.message)
      } finally {
        setLoading(false);
      }
    }

    fetchDepartments();
  }, []);

  return { departmentdata, loading, departmentsError };
};

export const useFecthCities = () => {
  const [citiesData, setCitiesData] = useState([]);
  const [loadingCities, setLoadingCities] = useState(true);
  const [citiesError, setCitiesError] = useState();

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await fetch(url);
        const res = await data.json();
        setCitiesData(res)
      } catch (error) {
        setCitiesError(error.message);
      } finally {
        setLoadingCities(false);
      }
    }

    fetchCities();
  }, []);

  return { citiesData, citiesError, loadingCities };
}