import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import SweetAlert from "../helpers/SweetAlert";
import { SelectStyle, OptionStyle } from "./BasicTagsStyle";
import ErrorComponent from "./ErrorComponent";

const SelectFilter = ({ url, handleChange }) => {
  const { data, error, isLoaded } = useFetch(url);

  let id = "category";

  if (error) {
    return (
      <div>
        {SweetAlert.messageError(error)}
        <ErrorComponent />
      </div>
    );
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <>
        <label htmlFor={id}>Elige una categoría</label>
        <SelectStyle data-testid="select" name={id} id={id} onChange={handleChange}>
          <OptionStyle value="">Categorías</OptionStyle>
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
