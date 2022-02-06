import { createContext, useState } from "react";

const IsOpenContext = createContext();

const IsOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeCard = () => setIsOpen(false);

  const data = { isOpen, setIsOpen, closeCard };

  return (
    <IsOpenContext.Provider value={data}>{children}</IsOpenContext.Provider>
  );
};

export { IsOpenProvider };
export default IsOpenContext;
