# MunchMate

MunchMate is a modern, user-friendly food delivery web application inspired by [MunchMate - Swipe & Eat](https://munchmate-swipe-eat-owhj.vercel.app/). It allows users to browse a variety of cuisines, add items to their cart, and place orders seamlessly. The project includes an admin dashboard for managing menu items and orders, as well as a robust backend for handling user authentication, orders, and more.

## Features

- Browse and search for food items by category
- Add items to cart and place orders
- User authentication and order history
- Admin dashboard for managing menu, orders, and users
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express, MongoDB
- **Admin Panel:** React, Vite

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd food-delivery-app-main
   ```

2. **Install dependencies:**
   - For frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For backend:
     ```bash
     cd ../backend
     npm install
     ```
   - For admin panel:
     ```bash
     cd ../admin
     npm install
     ```

3. **Configure environment variables:**
   - Set up your MongoDB connection string and any other required environment variables in the backend.

4. **Run the applications:**
   - Start the backend:
     ```bash
     npm start
     ```
   - Start the frontend:
     ```bash
     cd ../frontend
     npm run dev
     ```
   - Start the admin panel:
     ```bash
     cd ../admin
     npm run dev
     ```

## Folder Structure

- `frontend/` - User-facing web app
- `backend/` - API and database
- `admin/` - Admin dashboard

## License

This project is for educational purposes and inspired by [MunchMate - Swipe & Eat](https://munchmate-swipe-eat-owhj.vercel.app/). 
