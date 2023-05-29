# LAB - Class 02

## Project: Express

Dynamic API Phase 1: Build your core, standards compliant Express server

### Authors: Heather Holcomb | 401d53

***

### Problem Domain

From a business requirements standpoint, we will be building a basic Express server using best practices, including server modularization, use of middleware, and tests.

***

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/holcombheather/basic-express-server/actions)
- [back-end dev server url]()
- [whiteboard - most updated]()

***

### Collaborators

- Referenced lecture demo for class 02 with instructor Ryan Gallaway

***

### Setup

#### How to initialize this application
1. Clone this repo into your local environment
2. `npm init -y`
3. `npm i cors express jest supertest dotenv`

#### `.env` requirements (where applicable)

- `PORT` - 3001  (see `.env.sample`)

#### How to run this application

- `npm start` or `nodemon`

#### Features / Routes

- Person Route
  - Method: GET
  - Path: /person
    - Expects a query string from the user with a “name” property
    - When present, output JSON to the client with this shape: { name: "name provided" }
    - Without a name in the query string, force a “500” error

#### Tests

To run tests, use the command `npm test` in your terminal

#### UML
![UML image](./assests/lab2UML.png)
