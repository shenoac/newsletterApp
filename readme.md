# Monthly Newsletter App - Consolidated Documentation

This document combines information from the project README, frontend README, and supplementary usage notes. It serves as a single reference for setting up, running, and using the Monthly Newsletter App.

## Overview

The application consists of a **Node.js/Express** backend and a **React** frontend built with **Vite** and **Tailwind CSS**. It allows authenticated users to draft newsletters, preview them as email or website templates, and manage user accounts. MongoDB is used for persistent storage.

## Prerequisites

- **Node.js** (v18 or higher) and **npm** if running services directly.
- **Docker** and **Docker Compose** (optional) for containerized setup.

## Running with Docker Compose

1. Install Docker and Docker Compose.
2. From the project root, run:
   ```bash
   docker-compose up
   ```
   This starts MongoDB and the backend API on `http://localhost:4000`.
3. A test user is seeded automatically:
   - **Email:** `jay.patel@keelworks.org`
   - **Password:** `test@123`

## Running the Backend Without Docker

1. `cd backend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure the `.env` file contains:
   ```dotenv
   MONGO_URI=mongodb://localhost:27017/newsletter
   PORT=4000
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The API will be available on `http://localhost:4000`.

## Running the Frontend

1. `cd frontend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available on `http://localhost:5173` and proxies API requests to the backend.
4. To produce a production build:
   ```bash
   npm run build
   ```
   Serve the files from the `dist` directory.

### Vite Template Notes

The frontend uses Vite with React. Two official plugins are available for HMR:

- `@vitejs/plugin-react` (uses Babel)
- `@vitejs/plugin-react-swc` (uses SWC)

## Running Tests

Frontend unit tests use **Vitest**. Inside the `frontend` directory, run:

```bash
npm test
```

## Application Flow

1. **Login** – Navigate to the frontend URL and sign in with the seeded account (or an admin-created account).
2. **Home** – View saved drafts, create new newsletters, edit or delete drafts, add users, change your password, or log out.
3. **Editor** – Enter newsletter content, preview in real time, save to MongoDB, and download either the email HTML or website component.
4. **User Management** – Create new user accounts or change your own password.

Authentication tokens are stored in `localStorage`. All API calls are made to `/api` with the token supplied in the `Authorization` header.

## Training / Usage Tips

1. **Logging In**
   - Open `http://localhost:5173` and sign in using the provided credentials.
2. **Creating a Newsletter**
   - On the Home page, click **Create Newsletter**.
   - Fill in the month, year, and content sections in the editor.
   - Use **Save Draft** to persist your work.
   - Use **Download Email Template** or **Download Website Template** as needed.
3. **Managing Users**
   - Use **Add User** from the Home page to create additional accounts.
   - **Change Password** allows updating your own password.
4. **Viewing Analytics**
   - Each draft includes a **Stats** button that displays open counts and client statistics.
5. **Logging Out**
   - Click **Logout** to clear your token and return to the login screen.

## Repository Structure

```
newsletterApp/
├── backend/      # Node.js/Express API
│   ├── routes/   # auth, drafts, analytics
│   ├── models/   # Mongoose schemas
│   ├── server.js # app entry point
│   └── seed.js   # seeds test users
├── frontend/     # React app with Vite/Tailwind
│   ├── src/
│   │   ├── components/ # editor, templates
│   │   ├── pages/      # Home, Editor, Login, etc.
│   │   └── api/        # frontend API helpers
└── docker-compose.yaml
```

## Seed Script

To populate initial users manually:

```bash
cd backend
npm run seed
```

## Conclusion

The Monthly Newsletter App provides an end-to-end workflow for drafting newsletters, generating email/website templates, and tracking engagement. Use Docker Compose for quick setup or run each service locally with Node.js. Follow the training tips above to create and manage newsletters effectively.
