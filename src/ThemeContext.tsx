import React, { createContext, useEffect, useState, ReactNode } from "react";
import { ThemeContextType } from "./interfaces/index";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

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
      localStorage.themeVilayPortfolio = "dark";
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
