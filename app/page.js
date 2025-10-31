"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to <span className="text-blue-500">Sovrion</span>
      </motion.h1>

      <motion.p
        className="max-w-xl text-lg text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        We build fast, scalable, and modern web applications using the latest technologies. 
        Let’s create something amazing together.
      </motion.p>

      <motion.button
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        whileHover={{ scale: 1.05 }}
      >
        Get Started
      </motion.button>
    </main>
  );
}
