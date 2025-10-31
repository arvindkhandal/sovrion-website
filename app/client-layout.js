"use client";

import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
