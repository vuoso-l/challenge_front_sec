import { createContext, useState } from "react";

const IsOpenDetailProductContext = createContext();

const IsOpenDetailProductProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeCard = () => setIsOpen(false);

  const data = { isOpen, setIsOpen, closeCard };

  return (
    <IsOpenDetailProductContext.Provider value={data}>
      {children}
    </IsOpenDetailProductContext.Provider>
  );
};

export { IsOpenDetailProductProvider };
export default IsOpenDetailProductContext;
