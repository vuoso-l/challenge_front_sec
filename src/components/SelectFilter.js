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
