# React Authentication

Quick mock up of using authentication with an api providing you authentication. In theory you can take this and run with it.

Endpoints are authenticated by default through an `authenticateUser` middleware.

## Utilising

1. [x] React
1. [x] React Router Dom
1. [x] Axios
1. [x] React Context
1. [x] Express Auth API [@kepop1 - express-auth](https://github.com/kepop1/express-auth)

## Available Routes

- Authentication

  - /register - Allows you to register providing that the api is running
  - /login - Allows you to login with the credentials you registered with

- Routes
  - /welcome (authenticated) - If you're not logged in, you will be kicked back to login at the Router level.
  - /info (authenticated inside the component) - if you're not logged in, you'll be told to go to login after a request fails in a useEffect
