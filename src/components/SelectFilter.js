import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import SweetAlert from "../helpers/SweetAlert";

const SelectFilter = ({ url, handleChange }) => {
  const { data, error, isLoaded } = useFetch(url);

  let id = "category";

  if (error) {
    return SweetAlert.messageError(error);
  } else if (!isLoaded) {
    return <Loader />;
  } else {
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
  }
};

export default SelectFilter;
