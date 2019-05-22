# City Showdown Client

## Live Link
- https://city-showdown.geordieconnell.now.sh/

## API Documentation
- Endpoints:
    /auth
        /login
        /refresh
    /baseball
        /id
        /playoffs
            /id
    /city
        /id
    /showdowns
        /id
        /user/id

- This API is supported by a database with every city in Major League Baseball (MLB), every team in MLB,
  each team's playoff records, and every showdown grouped both by showdown id and user ids.

## Summary

- Have you ever wanted to know how your favorite teams stack up against your friend's? City Showdown lets you compare your favorite baseball team's playoff series record against any of the other 29 Major League Baseball teams. NBA, NFL, and NHL are coming soon so that you can see your teams' aggregate record against your friends' squads!

## Setting Up

- Install dependencies: `npm install`

## Scripts

- Start the application for development: `npm start`

## Technology Used

- React.js, Node.js, Knex.js, PostgreSQL, Enzyme, Mocha/Chai

## Screenshots

![Register](https://i.imgur.com/ej8iepK.png)
![UserPage](https://i.imgur.com/KdKkgFi.png)
![CreateShowdown](https://i.imgur.com/oSY5Ug3.png)
