import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import MyForm from "./Contact";
import NavBar from "./Components/Nav/NavBar";
import MyRepositories from "./Repositories";
import ReactRouter from "./NestedRoutes/ReactRouterAs";
import Calculator from "./NestedRoutes/Calculator";
import MyPortfolio from "./NestedRoutes/MyPortFolio";
import Phonie from "./NestedRoutes/Hackathon";
import FlightBooking from "./NestedRoutes/Flight";
import ChromeExtension from "./NestedRoutes/ChromeExtension";
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
         
          <NavBar />
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/portfolio" element={<MyGithub />} />
            <Route path="/repositories" element={<MyRepositories />}>
              <Route path="repo1" element={<ReactRouter />} />
              <Route path="repo2" element={<Calculator />} />
              <Route path="repo3" element={<MyPortfolio />} />
              <Route path="repo4" element={<Phonie />} />
              <Route path="repo5" element={<FlightBooking />} />
              <Route path="repo6" element={<ChromeExtension />} />
            </Route>

            <Route path="/contact" element={<MyForm />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
