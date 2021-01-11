# Solita Name Application

## Installation

Run **"docker-compose up --build"** at the project root.

## How it works

Name data is stored on a PostgreSQL database.  
The project backend has the following API endpoints:

**1. GET /api/names**

- Returns all names

**2. GET /api/names?orderBy={param}**

- Returns all names ordered by name or amount

**3. GET /api/names?name={param}**

- Returns one name that matches given parameter

**4. GET /api/names/total**

- Returns the total amount of all names

These endpoints are called when user clicks the buttons below the header.

## Feature showcase

### Sorting by popularity

![alt text](https://github.com/ninopenttinen/Solita-Name-Application/blob/main/showcase/Popularity.png?raw=true)

### Sorting alphabetically

![alt text](https://github.com/ninopenttinen/Solita-Name-Application/blob/main/showcase/Alphabetical-order.png?raw=true)

### Total amount

![alt text](https://github.com/ninopenttinen/Solita-Name-Application/blob/main/showcase/Total-amount.png?raw=true)

### Search by name

![alt text](https://github.com/ninopenttinen/Solita-Name-Application/blob/main/showcase/By-name.png?raw=true)
