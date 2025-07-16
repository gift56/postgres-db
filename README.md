# PERN Stack Product Management App

This is a full-stack web application built with the PERN (PostgreSQL, Express, React, Node.js) stack. It allows users to manage a list of products.

## Features

- **View Products**: See a list of all products.
- **Add Products**: Add new products to the list.
- **Update Products**: Edit existing product details.
- **Delete Products**: Remove products from the list.
- **Theme Selector**: Switch between different color themes.

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **PostgreSQL**: Relational database.
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments.
- **Arcjet**: Security middleware for rate limiting and bot protection.
- **Helmet**: Middleware for securing HTTP headers.
- **Morgan**: Middleware for logging HTTP requests.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: For managing environment variables.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool for modern web development.
- **React Router**: For client-side routing.
- **Zustand**: State management library.
- **Axios**: For making HTTP requests to the backend.
- **Tailwind CSS**: Utility-first CSS framework.
- **daisyUI**: Tailwind CSS component library.
- **Lucide React**: For icons.
- **React Hot Toast**: For notifications.

## Project Structure

```
.
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── productController.js
│   ├── libs
│   │   └── arcjet.js
│   ├── routes
│   │   └── productRoutes.js
│   ├── seeds
│   │   └── products.js
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── constants
│   │   ├── pages
│   │   └── stores
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── .gitignore
├── env.example.txt
├── package.json
└── readme.md
```

## Getting Started

### Prerequisites

- Node.js (v22 or later)
- npm
- A PostgreSQL database (e.g., from [Neon](https://neon.tech/))

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gift56/postgres-db.git
   cd postgres-db
   ```

2. **Install backend dependencies:**

   ```bash
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   npm install --prefix frontend
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory by copying `env.example.txt`.

   ```bash
   cp env.example.txt .env
   ```

   Update the `.env` file with your database connection string and Arcjet key.

   ```
   DATABASE_URL="your_postgresql_connection_string"
   ARCJET_KEY="your_arcjet_key"
   ```

### Available Scripts

- **`npm run dev`**: Starts the backend server with Nodemon for development.
- **`npm start`**: Starts the backend server for production.
- **`npm run seed`**: Seeds the database with initial product data.
- **`npm run build`**: Builds the frontend and installs all dependencies.

### Frontend Scripts

- **`npm run dev --prefix frontend`**: Starts the Vite development server for the frontend.
- **`npm run build --prefix frontend`**: Builds the frontend for production.
- **`npm run lint --prefix frontend`**: Lints the frontend code.
- **`npm run preview --prefix frontend`**: Previews the production build of the frontend.

## API Endpoints

All API endpoints are prefixed with `/api/products`.

- **`GET /`**: Get all products.
- **`GET /:id`**: Get a single product by its ID.
- **`POST /`**: Create a new product.
- **`PUT /:id`**: Update a product by its ID.
- **`DELETE /:id`**: Delete a product by its ID.
