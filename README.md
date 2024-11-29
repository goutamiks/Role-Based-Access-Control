# Role-Based-Access-Control
## Overview
### This project is a Role-Based Access Control (RBAC) system built using Node.js, Express, and MongoDB. It helps manage user roles and permissions to secure different routes in an application.

## Getting Started
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/role-based-access-control.git
cd role-based-access-control
2. Install Dependencies
bash
Copy code
npm install
3. Set Up Environment Variables
Create a .env file in the root directory and add:

env
Copy code
CONNECTION_STRING=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key
PORT=7002
4. Start the Server
bash
Copy code
npm run dev

## How to Use
## Register a New User
### POST /api/auth/register

{
  "username": "john_doe",
  "password": "password123",
  "role": "user"
}

## Login
POST /api/auth/login

{
  "username": "john_doe",
  "password": "password123"
}
Response: { "token": "your-jwt-token" }

## Access Protected Routes
Add Authorization: Bearer <your-jwt-token> to the header:

GET /api/users/admin (Admin only)
GET /api/users/manager (Admin & Manager)
GET /api/users/user (Admin, Manager & User)

## File Structure
src/index.js: Entry point.
src/config/dbConnect.js: Connects to MongoDB.
src/middlewares/authMiddleware.js: Verifies JWT tokens.
src/middlewares/roleMiddleware.js: Checks user roles.
src/models/userModel.js: User schema.
src/routes/authRoutes.js: Auth routes.
src/routes/userRoutes.js: User routes.

## Dependencies
Express: Server framework.
Mongoose: For MongoDB.
jsonwebtoken: For JWT handling.
bcryptjs: For password hashing.
dotenv: For environment variables.

## Contributing
Fork the repo.
Clone it locally.
Create a new branch for your changes.
Make your changes and commit.
Push and create a pull request.

## License
MIT License.

