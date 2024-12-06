/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
// import localFont from "next/font/local";
// import "./globals.css";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "CodeWalnut",
//   description: "Tech Test",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

// import '../public/style.css'; 
// app/layout.js or root layout
'use client'; 

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  return (
    // Root layout with <html> and <body> tags included
    <html lang="en">
      <head>
        {/* You can add your metadata, title, and other head elements here */}
        <title>My Pokémon App</title>
      </head>
      <body className={darkMode ? 'dark' : ''}>
        {/* Pass the children props to render the page content */}
        <Navbar toggleDarkMode={toggleDarkMode} />
        <main>{children}</main>
      </body>
    </html>
  );
}








