# Cultural Fest Scoreboard

This is a web application for a cultural event. It allows judges to enter marks for participants, and it displays a real-time scoreboard with the results.

## Features:

*   **Judges' Mark Entry:** A page for judges to enter the chest number and marks for each participant.
*   **Real-time Scoreboard:** A page that displays the total marks for each participant, updated in real-time.
*   **Supabase Integration:** The application is integrated with Supabase to store and retrieve the data.
*   **Navigation:** A navigation bar to switch between the judges' page and the scoreboard.
*   **Modern UI:** A visually appealing and user-friendly interface built with Tailwind CSS.

## Tech Stack:

*   **Framework:** Next.js with App Router
*   **Database:** Supabase
*   **Styling:** Tailwind CSS

## Current State & Recent Changes:

The application is now fully functional. The following fixes and improvements have been implemented:

*   **Resolved "Internal Server Error":** The application was failing to build, resulting in an "Internal Server Error". This was resolved by building the application for the first time.
*   **Resolved Critical 404 Error:** Fixed a fatal parsing error in the `app/page.tsx` file that was preventing the application from building and was causing a 404 error on all pages.
*   **Enhanced Home Page:** The home page has been redesigned to provide a clear and welcoming entry point for users, with easy navigation to the Judges and Scoreboard pages.
*   **Improved Code Quality & Stability:**
    *   Added the `lint` script to `package.json` to enable code quality checks.
    *   Resolved all linting errors, including unused variables and the use of `any` types, improving the overall stability and maintainability of the codebase.
*   **Real-time Scoreboard Implemented:** The scoreboard now subscribes to database changes and updates in real-time as judges submit new scores.
*   **Improved Error Handling:** Implemented more robust error handling in both the judges' submission form and the scoreboard data fetching.
