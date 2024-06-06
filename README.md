# GraphQL Express MySQL Example

This project is a sample Express application that uses GraphQL to perform CRUD operations with a MySQL database.

## Table of Contents
- [Requirements](#requirements)
- [Setup Project](#setup-project)
- [Setup MySQL Database](#setup-mysql-database)
- [Run the Application](#run-the-application)
- [Testing Queries and Mutations](#testing-queries-and-mutations)

## Requirements

- Node.js
- npm
- MySQL

## Setup Project

1. **Initialize the Project**:
   ```bash
   mkdir graphql-express-mysql
   cd graphql-express-mysql
   npm init -y
   ```

## Setup mysql database

1. **Create Table**:
   ```bash
   CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

## Run The Application

   ```bash
   node index.js
   ```

## Testing Queries and Mutations

### Create a User

```graphql
mutation {
  createUser(name: "John Doe", email: "john.doe@example.com") {
    id
    name
    email
  }
}
```
### Get All Users

```graphql
query {
  getUsers {
    id
    name
    email
  }
}
```

### Get Single User

```graphql
query {
  getUser(id: 1) {
    id
    name
    email
  }
}
```

### Update User

```graphql
mutation {
  updateUser(id: 1, name: "John Smith") {
    id
    name
    email
  }
}
```

### Delete User

```graphql
mutation {
  deleteUser(id: 1)
}
```

