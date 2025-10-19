# PYPA Talent Test Application

This is a web application for the PYPA Talent Test event. It allows judges to enter marks for participants, and it displays a real-time scoreboard with the results.

## Features:

*   **Judges' Login:** A secure login page for judges to authenticate using email and password.
*   **Marks Entry:** A page for judges to enter the chest number, category, and marks for each participant.
*   **Admin Dashboard:** A page to view all marks, search/filter, and export data.
*   **Real-time Updates:** The Admin Dashboard will update in real-time using Supabase subscriptions.
*   **404 Page:** A custom "Page Not Found" screen.

## Tech Stack:

*   **Framework:** Next.js with App Router
*   **Database:** Supabase
*   **Styling:** Tailwind CSS
*   **Animation:** Framer Motion
*   **Icons:** Lucide React

## Design:

*   **Theme:** Modern, minimalist, and responsive.
*   **Color Palette:** Neutral colors (slate, indigo, gray, or blue tones).
*   **UI Elements:** Rounded corners, soft shadows, and ample white space.
*   **Transitions:** Smooth transitions and light hover effects.

## Project Plan:

1.  **Project Setup:**
    *   Create a new Next.js application.
    *   Install necessary dependencies: `@supabase/supabase-js`, `framer-motion`, `lucide-react`.
    *   Configure Tailwind CSS.
2.  **Supabase Setup:**
    *   Create a new Supabase project.
    *   Define the database schema with `judges`, `participants`, and `marks` tables.
    *   Set up authentication for judges.
    *   Enable Row Level Security (RLS) on the tables.
    *   **Created `lib/supabaseClient.ts` to initialize the Supabase client. You need to add your Supabase URL and anon key to this file.**
3.  **Application Development:**
    *   Create the Login Page.
    *   Create the Marks Entry Page.
    *   Implement the Admin Dashboard.
    *   Create a custom 404 Page.
4.  **Styling:**
    *   Apply a modern, minimalist design using Tailwind CSS.
    *   Incorporate smooth transitions and hover effects with Framer Motion.
    *   Use `lucide-react` for icons.
5.  **Deployment:**
    *   Deploy the application to Firebase Hosting or Vercel.
