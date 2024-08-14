School Management System

This is a School Management System built with Next.js, using MySQL as the database and Axios for making API requests. The project allows users to add new schools and display a list of all schools with details like name, address, contact information, and Schoolimages. The project uses  CSS for styling and react-hook-form for managing form inputs.

Features

Add School: Users can add new schools with details such as name, address, city, state, contact information, and an optional logo image.

Show Schools: Displays a list of all schools with their respective details.

API Routes: Custom API routes to handle the addition and retrieval of school data.

Form Management: Utilizes react-hook-form to manage and validate form inputs efficiently.

Technologies Used

Next.js: A React framework for building fast and scalable web applications.

MySQL: An open-source relational database management system used to store school data.

Axios: A promise-based HTTP client for making API requests from the client side.

Multer: A Node.js middleware used for handling multipart/form-data, which is primarily used for uploading files.

React Hook Form: A library for managing form state and validation in React applications.

Inline CSS: Styling is done directly within the JSX elements to keep the codebase simple and focused.

Setting Up the Project

1) Clone the Repository: git clone https://github.com/sarim705/School-Management.git
 
    cd Projects

2) Install Dependencies: npm install
  
3) Database Configuration:

writing  the lib/db.js file with local MySQL database credentials.
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'assignment',
});

export default pool;

Run the Development Server:  npm run dev

Open http://localhost:3000 to view the project in  browser

Multer

Multer is used in this project for handling file uploads, particularly the school logo images. It processes multipart/form-data, which is typically used for file uploads.

MySQL

MySQL is used as the database to store the school data, including name, address, city, state, contact, email, and image paths. The project uses the mysql2 package to interact with the database using promises.

React Hook Form

react-hook-form is used to manage the form state and validation in the addSchool page. It simplifies form handling by reducing the amount of code needed to manage state, validation, and error messages.

Inline CSS

Inline CSS is used throughout the project to handle the styling directly within the JSX components, making it easier to manage styles in  projects without external dependencies.

Deployment

This project can be deployed to services like Vercel. Ensure that the MySQL database is accessible remotely or through a cloud provider for production deployment






   
   


