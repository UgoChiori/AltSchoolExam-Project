This project is a simple React application that allows the user to search for GitHub repositories using the GitHub Repo API.

Getting Started:
To get started, create new React app: npx create-react-app altschoolassignment
Start the development server:

npm start 
The application is hosted at https://alt-school-exam-project-zeta.vercel.app/

The following dependencies were installed for this project:

npm i- react-router-dom
npm i- axios
npm i- react-error-boundary
npm i- styled-components
npm i- react-switch
npm i- react-scroll
npm i- react-helmet-async

url https://api.github.com/users/UgoChiori/repos

Next, data was collected from GitHub using axios, and was fetched and rendered using the React Hooks, useState and useEffect.

The useEffect and useState methods were used to fetch and update the data automatically, every time a new repository is created.

Error Boundary was added to catch errors that may occur when code is executed. When an error is encountered, the error message is returned.

Using the App
The app will display a list of repositories. You can click on a repository to view more details about it.


Built With

- React - A JavaScript library for building user interfaces
- axios - A Promise based HTTP client for the browser and node.js
- GitHub API - Used to fetch repository data
