import { createContext, useState, useEffect } from "react";

const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("ru");

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangProvider, LangContext };
