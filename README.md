# Book-Search-Engine

  ## ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Description
  A web application that allows a user to search for books. A user can save the book details to their profile, or remove them by a click of a button. This application is created using a MERN stack, which means I use a MongoDB database, Express.js to communicate with the browser, React to create the front-end, and Node to create the backend. The search data comes from a Google REST API, but the gathered data uses GraphQL API endpoints to communicate with the MongoDB database. User-authorization is handled by JSON Web Tokens and saved to the browser through local storage. 

   This app makes use of a few node modules to make the development easier, including: Express, Mongoose, Apollo-Server-Express, Bcrypt, jsonwebtoken and graphql. This app makes use of:
  * Node.js and Express.js to create a single RESTful API for google books api
  * Apollo-Server-Express and GraphQL to make GraphQL API endpoints
  * Queries and Mutations to interact with the database from front-end
  * typeDefs and Resolvers to recieve data from front-end on the back-end and communicate with the database
  * MongoDB (noSQL) and Mongoose OMT for the database
  * JWT for authorization of logged in users
  * Bcrypt for encrypting password information

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  ## Installation
  To install Node.js, follow the documentation [Node.js](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)

  To install MongoDB, follow the documentation [MongoDB](https://docs.mongodb.com/manual/installation/)

  To install necessary dependencies, run the following command: 
  ```
  npm run install
  ```
  
  ## Usage
  Access the webpage by going to the deployed site: [Book-Search-Engine](https://bloodcurdling-beast-94043.herokuapp.com/). 

  If you want to run this on a local server, set the path to the Book-Search-Engine folder in the terminal. Run the entire app by typing `npm run develop`. Go to http://localhost:3000 to acesss the app and http://localhost:3001/graphql to acess the GraphQL endpoint.
  

  ## License  
  This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

  ## Contributing
   I am the sole author of this repo (with help from UoR activities) and I am not currently looking for contributors.

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at Gaitherdb@gmail.com. You can find more of my work at [Gaitherdb](https://github.com/Gaitherdb).
