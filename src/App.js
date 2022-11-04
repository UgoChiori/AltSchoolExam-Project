import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import Home from "./Home";
import Error from "./Error";
import MyForm from "./Contact";
import NavBar from "./Components/Nav/NavBar";
import MyGithub from "./MyGithub";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext("null");

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <section>
        <div className="Home" id={theme}>
          <ErrorBoundary>
            <NavBar />
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/portfolio" element={<MyGithub />} />

              <Route path="/contact" element={<MyForm />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
