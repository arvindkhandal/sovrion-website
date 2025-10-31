import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b dark:border-gray-700">
      <h1 className="text-xl font-bold dark:text-white">Sovrion</h1>
      <ThemeToggle />
    </nav>
  );
}
