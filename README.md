# User Management System

## Overview

The User Management System is a web application for managing user data. It allows users to view, add, update, and delete user records. This project includes a frontend built with React and Bootstrap, and a backend API built with Node.js, Express, and Sequelize ORM.

## Features

- View a list of users with their name, email, date of birth, and encrypted password.
- Add a new user by providing name, email, date of birth, and password.
- Update an existing user's information.
- Delete a user record.

## Technologies Used

- Frontend:
  - React
  - Bootstrap

- Backend:
  - Node.js
  - Express.js
  - Sequelize ORM
  - bcrypt (for password encryption)

## Setup

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/user-management-system.git
    ```

2. Navigate to the project directory:

    ```bash
    cd user-management-system
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your web browser and navigate to [http://localhost:3001](http://localhost:3001) to view the application.

### Configuration

- The backend API endpoint is configured to run on port 3000 by default. You can change this in the `server.js` file.

- Update the API URL in the frontend code (`services/UserServices.js`) if you change the backend server port or domain.
### Backend Environment Variables

This project uses a `.env` file to manage environment-specific configuration. You should create a `.env` file in the root directory of the backend server with the following variables:

- **DB_HOST**: The hostname or IP address of your database server. Example: `localhost`

- **DB_NAME**: The name of the database to connect to. Example: `user_management`

- **DB_USER**: The username used to authenticate with the database server. Example: `root`

- **DB_PASS**: The password used to authenticate with the database server. Example: `root`

Make sure to replace the example values with your actual database configuration. Do not expose sensitive information like passwords in your repository.


## Usage

1. Home Page:
   - Upon opening the application, you'll see a list of users.
   - You can add, edit, or delete users from this page.

2. Add User:
   - Click on the "Add User" button to add a new user.
   - Fill in the required fields (name, email, date of birth, and password) and click "Add User".

3. Edit User:
   - Click on the "Update" button next to a user to edit their information.
   - Update the fields and click "Update User".

4. Delete User:
   - Click on the "Delete" button next to a user to delete them from the system.
