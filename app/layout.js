import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Sovrion",
  description: "Modern Web Solutions by Sovrion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
