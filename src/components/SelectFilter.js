/* import React from "react";

const SelectFilter = ({ category, setCategory}) => {
  
  const handleChange = (e) => {
    setCategory(e.target.value)
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your drink selection is: " + e.target.value)
    
  };

  return (
    <>
      
        <label htmlFor="categories">
          Filtrar por categoría
          <select name="categories" id="categories" onChange={handleChange}>
          <option value="">Elige una categoría</option>
              {category.map(cat => <option key={cat} value={cat}>{cat}</option>
                  
              )
              }         
            {/* <option value="agua">agua</option>;
            <option value="cerveza">cerveza</option>;
            <option value="vino">vino</option>;
            <option value="gaseosas">gaseosas</option>;
            <option value="mas_vendidos">más vendidos</option>; }            
          </select>
        </label>
        <input type="submit" value="Seleccionar"></input>
    </>
  );
};

export default SelectFilter; */

import { useFetch } from "../hooks/useFetch";

const SelectFilter = ({ url, handleChange }) => {
  const { data, error, loading } = useFetch(url);

  let id = "category";

  if (!data) return null;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
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
