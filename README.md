DISCLAIMER MY PROJECT HEAVILY DEPENDS ON OAUTH2.0 AND api.github.com IF SOMETHING HAPPENS TO EITHER OF THEM the project WON'T WORK


This Github-like application is a web-based platform designed for version control and collaborative software development.
Technologies Used:

Frontend: React.js
Backend: Node.js
Database: MongoDB
Authentication: Passport.js

User Authentication and Authorization:

Users can sign up, log in, and manage their profiles using Passport.js for secure authentication.
OAuth integration for logging in with services like GitHub, Google, etc.

Search Functionality:

Allows users to search for repositories, users, and specific code within repositories.
Advanced search options to filter results based on various criteria.


rontend (React.js):

Utilizes components for a modular and maintainable codebase.
State management with Redux or Context API for efficient data handling.
Axios or Fetch API for making HTTP requests to the backend.

Backend (Node.js):

RESTful API endpoints for handling user authentication, repository management, issue tracking, etc.
Middleware for handling authentication, authorization, and other common tasks.

Database (MongoDB):

Stores user data, repository details, commit history, issues, and comments.
Mongoose for schema definition and interaction with MongoDB.


Authentication (Passport.js):

Local strategy for username and password authentication.
OAuth strategies for third-party authentication providers.


![Screenshot 2024-06-28 000844](https://github.com/vedangpandey/Github_Clone/assets/117765019/c3b6a58f-bd7f-4f86-abdb-8ab18561a14c)

HomePage:
![Home](https://github.com/vedangpandey/Github_Clone/assets/117765019/95e9a9d2-610c-40ac-900b-a29221c95fd0)

LoginPage an Oauth2.0
![login_passport](https://github.com/vedangpandey/Github_Clone/assets/117765019/9806e7e2-da48-4e3a-961f-80f072bce2f3)

SignupDirectly via passportjs
![signup](https://github.com/vedangpandey/Github_Clone/assets/117765019/8330c989-7a21-4756-b5e7-4bd3bdfee714)

AfterLogin how things look like
![afterlogin](https://github.com/vedangpandey/Github_Clone/assets/117765019/d1039e24-76a4-41db-b77f-62192f36217e)

you can search another user :
![Visitingotherprofiles](https://github.com/vedangpandey/Github_Clone/assets/117765019/5a0358cd-9ffc-40c5-b958-c80259e164e4)

Sort based on differentCriteria
![SortbasedOndifferentCriteria](https://github.com/vedangpandey/Github_Clone/assets/117765019/9cf58e36-5534-4dd1-afed-d22f662e695b)

you can explore popular repsoitory on github
![explore_popular_repository](https://github.com/vedangpandey/Github_Clone/assets/117765019/f6d0174b-0c30-4d06-b592-82f28df982cb)

Heres asn example of Typescript Repos:
![explore_popular_repository_typescript](https://github.com/vedangpandey/Github_Clone/assets/117765019/055d7f96-88ac-4648-864b-7021e8c8aa03)
