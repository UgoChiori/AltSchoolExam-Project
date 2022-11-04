import React, { createContext, useState } from "react";
import Profile from "./Components/Profile";
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
        <div style={{display:'flex', justifyContent:'space-between'}} className="Home" id={theme}>
          <ErrorBoundary>
            <Profile />
            <div style={{border:'1px solid black', height:'100%', flexGrow:'1'}}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/portfolio" element={<MyGithub />} />

              <Route path="/contact" element={<MyForm />} />
              <Route path="*" element={<Error />} />
            </Routes>
            </div>
            {/* <NavBar /> */}
            {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> */}
            
          </ErrorBoundary>
        </div>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
