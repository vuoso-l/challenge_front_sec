import React from "react";
import { useFetch } from "../hooks/useFetch";

const SelectFilter = ({ url, handleChange }) => {
  const { data } = useFetch(url);

  let id = "category";

  return (
    <>
      <label htmlFor={id}>Elegí una categoría</label>
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige una categoría</option>
        <option value="all">Ver todas las categorías</option>
        {data &&
          data.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectFilter;
