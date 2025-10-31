"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const metadata = {
  title: "Sovrion",
  description: "Modern Web Solutions by Sovrion",
};

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <html lang="en">
      <body className={`transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
        <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Sovrion</h1>
          <ul className="flex gap-6">
            <li><a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
            <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
          </ul>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 border rounded-lg text-sm dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>

        <AnimatePresence mode="wait">
          <motion.main
            key={Math.random()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen p-6"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400 border-t dark:border-gray-700">
          © {new Date().getFullYear()} Sovrion. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
