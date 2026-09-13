# Blinks

A simple, fast URL shortener built with Next.js and MongoDB.

## Features

- Shorten long URLs into short, shareable links
- Custom alias support (choose your own slug instead of a random one)
- MongoDB-backed persistent storage for links
- Responsive UI styled with Tailwind CSS

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16
- **UI Library:** React 19
- **Database:** MongoDB (via the official `mongodb` driver)
- **Styling:** Tailwind CSS 4
- **Icons:** lucide-react
- **Linting:** ESLint 9 (eslint-config-next)

## Installation (Localhost)

### Prerequisites

- Node.js (LTS recommended)
- npm (or yarn/pnpm if you prefer — adjust commands accordingly)
- A MongoDB Atlas cluster (or local MongoDB instance)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/hamzawaqas-01s/blink.git
   cd blinks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the project root:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

   > **Note:** `MONGODB_URI` must **not** be prefixed with `NEXT_PUBLIC_` — it's a server-only credential and must stay private. `NEXT_PUBLIC_HOST` is safe to expose since it's just the app's own base URL, used to construct short links client-side.

4. **Whitelist your IP in MongoDB Atlas**

   Go to **Network Access → IP Access List** in your Atlas project and add either your current IP or `0.0.0.0/0` (allow from anywhere) so your local machine can reach the cluster.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run start
```
