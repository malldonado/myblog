# Myblog 📰

This project aims to create an interactive blog using modern technologies to provide a dynamic and secure experience for users. The main technologies employed include ReactJS for the frontend, Node.js for the backend, MongoDB as the database, and JWT authentication to ensure security.

## Key Components:

### Frontend com ReactJS:

Development of a highly responsive and interactive frontend using ReactJS.
Implementation of reusable components to optimize code maintenance.
Utilization of libraries such as React Quill for rich text editing, providing a friendly and intuitive writing experience.

### Backend with Node.js:

Construction of a robust API using Node.js to supply dynamic data to the frontend.
Implementation of routes for handling posts, comments, and users.
Use of JWT (JSON Web Tokens) for authentication, ensuring the security of interactions between the frontend and backend.

### MongoDB Database:

Efficient data storage using MongoDB, a NoSQL database.
Data modeling for posts, comments, and user information.

### JWT Authentication:

Implementation of a secure authentication system based on JWT to protect routes and ensure that only authorized users can create, edit, or delete posts and comments.

### Integration of Tools:

Use of libraries and auxiliary tools to optimize development, such as React Quill for rich text editing.
Integration of security techniques, including protection against CSRF (Cross-Site Request Forgery) and XSS (Cross-Site Scripting) attacks.

#### Objectives:

Create an intuitive and aesthetically pleasing blog interface.
Allow authenticated users to create, edit, and delete their posts.
Facilitate interaction through a dynamic comment system.
Ensure application security through JWT authentication and recommended security practices.

#### Benefits:

Enhanced writing experience with the use of React Quill.
Robust security with JWT authentication.
Scalable and easily maintainable architecture.

### Home
![1](https://github.com/malldonado/myblog/assets/47877623/ab7c88fc-8a64-49e0-b3f9-389e85192a92)


### Page of news
![2](https://github.com/malldonado/myblog/assets/47877623/1786ac08-c9a0-4b59-af6d-3785019d4648)


### Page of edit news
![3](https://github.com/malldonado/myblog/assets/47877623/35849e64-a840-4fc4-9cc6-94233bf5e2fc)

## Installation

### Project Startup Description: Interactive Blog

To begin exploring the Interactive Blog, follow the steps below to start both the Node.js API and the ReactJS frontend.

### Step 1: Start the Node.js API

Ensure you have Node.js and the package manager (npm or yarn) installed on your system. Navigate to the API directory in the terminal and execute the following command:

```
yarn dev
```

or

```
npm run dev
```

This will initialize the API, setting up the necessary endpoints to provide dynamic data to the frontend.

### Step 2: Start the ReactJS Frontend

Now, navigate to the frontend directory in the terminal and execute the following command:

```
yarn start
```

or

```
npm start
```

This will start the ReactJS development server, making the blog accessible in your browser.

### Step 3: Explore the Interactive Blog

With both servers running, open your browser and access the address provided by the React development server (usually http://localhost:3000/). You will be greeted with an immersive and user-friendly interface, ready to create, edit, and explore posts.

JWT authentication ensures a secure and personalized experience, while the integration of React Quill facilitates the creation of content-rich posts.

Note: Make sure to have MongoDB installed and configured correctly, as the application uses this database to store blog information.

## Built With

### Tools used to develop this project:

* **Reactjs**
* **Nodejs**
* **MongoDB**
