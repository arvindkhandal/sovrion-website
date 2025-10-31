import "./globals.css";
import ClientLayout from "./client-layout";

export const metadata = {
  title: "Sovrion",
  description: "Modern Web Solutions by Sovrion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}


