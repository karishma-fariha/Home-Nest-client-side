🏡 HomeNest | Real Estate Property Marketplace
HomeNest is a high-performance MERN-stack real estate platform designed to streamline property discovery and management. It provides a seamless interface for users to browse, list, and review properties with real-time CRUD capabilities and secure authentication.

🔗 Project Links & Credentials
Live Deployment: https://home-nest-27022.web.app

Demo Access (User): user@gmail.com | User10

✨ Implemented Features
📡 Public & Discovery Features
Dynamic Property Hub: An automated landing page featuring the latest listings, auto-sorted by creation date using MongoDB aggregation.
Global Search Index: A dedicated "All Properties" page displaying the entire ecosystem's inventory in a responsive grid.
Property Intelligence: Detailed view pages providing comprehensive specs, pricing, and historical user feedback for every listing.
Interactive Reviews: A robust rating and review system allowing users to share feedback on specific properties.

🏠 Listing & Management (Private)
Personal Inventory Control: A "My Properties" workspace where users can monitor and manage their own real estate listings.
In-Place Updates: Integrated a Modal-based update system for quick property modifications without full page reloads.
Smart CRUD Operations: Full create, read, update, and delete functionality secured by backend validation.
Identity Protection: Secure private routes powered by Firebase Authentication and custom authorization logic.

💻 Technologies Used
Layer                  Stack
Frontend        "React.js, Tailwind CSS, DaisyUI, React Router DOM"
Backend         "Node.js, Express.js (REST API)"
Database         MongoDB Atlas (NoSQL)
Security        "Firebase Authentication, JWT (JSON Web Tokens), Private Routes"
Styling          Modern CSS-in-JS and Responsive Utilities

🛣️ Route Summary
Public Routes
/ : Home (Latest Property Highlights)
/all-properties : Global Inventory List
/property/:id : Deep-dive Property Details
/login / /register : Identity Access Gateways

Private (User) Routes
/my-properties : Personal Listing Dashboard
/add-property : Listing Creation Portal
/profile : User Account Overview

🛠️ Setup & Installation
1. Repository Clone
git clone https://github.com/your-username/homenest-client.git
git clone https://github.com/your-username/homenest-server.git
2. Backend Configuration
Navigate to the server directory: cd homenest-server
Install dependencies: npm install
Create a .env file:
      DB_USER=your_mongodb_user
      DB_PASS=your_mongodb_password
      JWT_SECRET=your_long_random_jwt_secret
Start the application: npm run dev

🛡️ Core Concepts Implemented
In-Place State Management: Utilized Modals for property updates to maintain UI state consistency and improve user experience (UX).
Responsive Grid Logic: Optimized layouts using Tailwind’s utility-first approach to ensure a premium experience across mobile and desktop.
NoSQL Architecture: Designed an efficient MongoDB schema to handle nested reviews and property meta-data for fast retrieval.

Develop by
Karishma Fariha
