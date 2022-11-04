import React from "react";

function ReactRouter() {
  return (
    <section className="posts">
      <article>
        <header>
          <h2>React Router</h2>

          <p>
            I participated in a hackathon and my team built an app that shows
            your mobile service provider while typing. It was built using HTML,
            CSS, and JavaScript.
          </p>
          <div>
            <a href="https://github.com/UgoChiori/hackathon-phonie"> </a>
            {/* <img src={require("./Coverpage.jpeg" )}  alt="cover page" /> */}
            <ul className="actions">
              <li>
                {" "}
                <a href="https://github.com/UgoChiori/hackathon-phonie">
                  <button className="large button">View repository</button>
                </a>
              </li>
            </ul>
          </div>
        </header>
      </article>
    </section>
  );
}

export default ReactRouter;
