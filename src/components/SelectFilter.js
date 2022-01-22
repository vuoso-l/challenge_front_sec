import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import SweetAlert from "../helpers/SweetAlert";
import { SelectStyle, OptionStyle } from "./BasicTagsStyle";

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
        <label htmlFor={id}>Elige una categoría</label>
        <SelectStyle name={id} id={id} onChange={handleChange}>
          <OptionStyle value="all">Ver todas las categorías</OptionStyle>
          {data &&
            data.map((el) => (
              <OptionStyle key={el} value={el}>
                {el}
              </OptionStyle>
            ))}
        </SelectStyle>
      </>
    );
  }
};

export default SelectFilter;
