# My PEAN Stack test application
I created this application so I can learn the PEAN stack. Which consists of:
- Postgres
- Express.js
- Angular.js
- Node.js

![The test application running!!!](https://github.com/mitchell985/PEAN-Stack/raw/master/PEAN%20Stack%20working!.png)

This is a todo list application based on a conversion of this https://github.com/ousecTic/pern-todo-app/ PERN application specifically converting it from React to Angular.

The angular tutorial store page is also in here. Details on that can be found here. https://angular.io/start

## .env file
An env file is required to run this application it is the the root directory and is layed out as follows

```env
POSTGRES_USERNAME = 
POSTGRES_PASSWORD = 
POSTGRES_HOST = 
POSTGRES_PORT = 
POSTGRES_DB = 
EXPRESS_PORT = 
EXPRESS_HOST = 
```

## Client and Store pages
To run client or store cd to the directory and run yarn to download the packages and yarn start to run the application on `localhost:4200`

```bash
yarn
yarn start
```

## Server
First run the docker compose with the following command

```bash
docker compose up
```

Then logon to the container and run the following commands. Please note this is only need for the first-time setup.

```bash
psql -U postgres
CREATE DATABASE peantodo;
\c peantodo
CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY, 
  description VARCHAR(255)
);
```

Now back on the host computer run the follow commands

```bash
yarn
yarn dev
```

The server should now be running on `localhost:5000`
