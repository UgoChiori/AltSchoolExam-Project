import React, { createContext, useState, useEffect } from "react";
import Profile from "./Components/Profile";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { USER_PER_PAGE } from "./Components/UserPerPage";
import MyRepo from "./MyRepo";
import Error from "./Error";
import MyGithub from "./MyGithub";
import axios from "axios";
import ErrorFallback from "./Components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";




export const ThemeContext = createContext("null");

function App() {
  const [theme, setTheme] = useState("light");
  const [portfolio, setPortFolio] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [profiledata, setProfileData] = useState([]);
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    const repoPromise = axios.get(
      "https://api.github.com/users/UgoChiori/repos"
    );
    const profilePromise = axios.get("https://api.github.com/users/UgoChiori");
    Promise.all([repoPromise, profilePromise])
      .then(([repoResponse, profileResponse]) => {
       
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
    <HelmetProvider>
      <title>Software Developer portfolio</title>
      <meta name="description" content="Software developers in Lagos Nigeria" />
      <link rel="canonical" href="/portfolio" />
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
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => setExplode(false)}
            {...{ explode }}
          >
            <Profile alt="fetched data"
              imgSrc={profiledata.avatar_url}
              name={profiledata.name}
              bio={profiledata.bio}
              location={profiledata.location}
              followers={profiledata.followers}
              following={profiledata.following}
              public_repos={profiledata.public_repos}
              html_url={profiledata.html_url}
              twitter_username={profiledata.twitter_username}
            />
            <div
              style={{
                
                minHeight: "100%",
                flexGrow: "1",
                flexDirection: "column",
              }}
            >
              <Routes>
                <Route path="/" element={<MyGithub />} />
                <Route path="/portfolio" element={<MyGithub />}>
                  <Route path=":id" element={<MyRepo />} />
                </Route>

                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </ErrorBoundary>
       
        </div>
      </section>
    </ThemeContext.Provider>
    </HelmetProvider>
  );
}

export default App;
