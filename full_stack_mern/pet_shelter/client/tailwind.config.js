/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem'
      
    },
  },
  plugins: [],
}

// 1. npm create vite@latest client — —template react
// 2. Cd client
// 3. npm install (installs vite dependencies)
// 4. npm install -D tailwindcss postcss autoprefixer
// 5. npx tailwindcss init -p
// 6. Edit tailwind.config file
// content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
// 6. Edit index.css file
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// 7. npm run dev
