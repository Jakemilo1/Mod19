# Express.js API with Sequelize

This project provides a functional Express.js API integrated with Sequelize to interact with a MySQL database. This API supports several endpoints allowing you to perform CRUD operations on Categories, Products, and Tags.

## Setup

- Clone the repository to your local machine.
- Make sure to have [Node.js](https://nodejs.org/) installed.
- Run `npm install` to install all the dependencies.
- Add your MySQL username, password and database name to an environment variable file `.env` at the root of your project:

```env
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
```

## Database Creation and Seeding

Run the following commands in your terminal to create your database and seed it with test data:

- `npm run schema`: This command will create the database using Sequelize.
- `npm run seeds`: This command will seed the database with test data.

## Start the Server

Enter `npm start` to start the Express.js server. Sequelize models are automatically synced to the MySQL database on server start.

## API Endpoints

API routes can be tested in Insomnia Core or Postman. The main routes are:

- Categories
  - GET all categories: `/api/categories`
  - GET single category by id: `/api/categories/:id`
  - POST a new category: `/api/categories`
  - PUT to update a category: `/api/categories/:id`
  - DELETE a category by id: `/api/categories/:id`
  
- Products
  - GET all products: `/api/products`
  - GET single product by id: `/api/products/:id`
  - POST a new product: `/api/products`
  - PUT to update a product: `/api/products/:id`
  - DELETE a product by id: `/api/products/:id`
  
- Tags
  - GET all tags: `/api/tags`
  - GET single tag by id: `/api/tags/:id`
  - POST a new tag: `/api/tags`
  - PUT to update a tag: `/api/tags/:id`
  - DELETE a tag by id: `/api/tags/:id`

This will allow you to perform GET, POST, PUT, and DELETE operations on your categories, products and tags.
