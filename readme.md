# Newsletter App

This repository contains a newsletter management tool consisting of a Node.js/Express backend and a React frontend built with Vite and Tailwind CSS. It allows authenticated users to create newsletter drafts, preview the final email/website HTML, and manage user accounts.

## Prerequisites

- **Node.js** (v18+ recommended) if you intend to run the backend directly.
- **npm** (comes with Node) for installing dependencies.
- **Docker & Docker Compose** (optional but recommended) for running MongoDB and the backend.

## Running with Docker Compose

1. Install Docker and Docker Compose.
2. In the project root, run:
   ```bash
   docker-compose up
   ```
   This will start a MongoDB instance and the backend API on `http://localhost:4000`.
3. The backend seeds a test user on startup:
   - **Email:** `jay.patel@keelworks.org`
   - **Password:** `test@123`

## Running the Backend without Docker

1. `cd backend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env` (already provided for Docker) or create your own and configure:
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
   The application will be available on `http://localhost:5173` and proxy API calls to the backend.

To create a production build run `npm run build` and serve the files from the `dist` directory.

## Running Tests

The frontend uses [Vitest](https://vitest.dev/) for unit tests. Inside the `frontend` directory run:

```bash
npm test
```

## Application Flow

1. **Login** – Browse to the frontend URL. You will be redirected to `/login`. Sign in using the seeded account (or one created by an admin).
2. **Home** – After logging in, the home page lists your saved newsletter drafts. From here you can:
   - Create a new newsletter
   - Edit or delete existing drafts
   - Add a new user
   - Change your password
   - Log out
3. **Editor** – When creating or editing a newsletter you can:
   - Enter the month/year, founder message, quote of the month and other sections
   - Preview the newsletter in real time
   - Save the draft to the backend
   - Download the generated **Email HTML** or **Website component**
4. **User Management** – Authenticated users can create new user accounts and change their own password via the respective pages.

The application stores the authentication token in `localStorage`. All API requests are made to the backend under the `/api` path and require the token in the `Authorization` header.

---

With the backend and frontend running, visit the frontend URL, log in and start composing newsletters!
