import React, { createContext, useState, useEffect } from "react";
import Profile from "./Components/Profile";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import { USER_PER_PAGE } from "./Components/UserPerPage";
import NavigationLink from "./Components/NavBar";
import Error from "./Error";
import MyForm from "./Contact";

import MyGithub from "./MyGithub";
import ReactSwitch from "react-switch";
import axios from "axios";

export const ThemeContext = createContext("null");

function App() {
  const [theme, setTheme] = useState("light");
  const [portfolio, setPortFolio] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [profiledata, setProfileData] = useState([]);

  // <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />

  useEffect(() => {
    const repoPromise = axios.get(
      "https://api.github.com/users/UgoChiori/repos"
    );
    const profilePromise = axios.get("https://api.github.com/users/UgoChiori");
    Promise.all([repoPromise, profilePromise])
      .then(([repoResponse, profileResponse]) => {
        console.log(repoResponse.data);
        setPortFolio(repoResponse.data);
        setTotalPages(Math.ceil(repoResponse.data.length / USER_PER_PAGE));
        setLoading(false);
        setProfileData(profileResponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <section style={{ height: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
          }}
          className="Home"
          id={theme}
        >
          <ErrorBoundary>
            <NavigationLink />
            <Profile
              imgSrc={profiledata.avatar_url}
              name={profiledata.name}
              bio={profiledata.bio}
              location={profiledata.location}
              email={profiledata.email}
              followers={profiledata.followers}
              following={profiledata.following}
              public_repos={profiledata.public_repos}
              public_gists={profiledata.public_gists}
              html_url={profiledata.html_url}
              blog={profiledata.blog}
              twitter_username={profiledata.twitter_username}
              hireable={profiledata.hireable}
              company={profiledata.company}
              created_at={profiledata.created_at}
              updated_at={profiledata.updated_at}
            />
            <div
              style={{
                border: "1px solid black",
                minHeight: "100%",
                flexGrow: "1",
                flexDirection: "column",
              }}
            >
              <Routes>
                <Route path="/portfolio" element={<MyGithub />} />

                <Route path="/contact" element={<MyForm />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
           
          </ErrorBoundary>
        </div>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
