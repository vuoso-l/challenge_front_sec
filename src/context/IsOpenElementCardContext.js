import { createContext, useState } from "react";

const IsOpenElementCardContext = createContext();

const IsOpenElementCardProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeCard = () => setIsOpen(false);

  const data = { isOpen, setIsOpen, closeCard };

  return (
    <IsOpenElementCardContext.Provider value={data}>{children}</IsOpenElementCardContext.Provider>
  );
};

export { IsOpenElementCardProvider };
export default IsOpenElementCardContext;
