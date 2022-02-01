import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.themeVilayPortfolio = "dark";
      setTheme("dark");
    } else {
      localStorage.themeVilayPortfolio = "light";
      setTheme("light");
    }
  };

  useEffect(() => {
    if (!localStorage.themeVilayPortfolio) {
      localStorage.theme = "light";
    }
    setTheme(localStorage.themeVilayPortfolio);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
