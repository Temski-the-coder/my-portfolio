import { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa6";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, [])

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300
      focus:outline-hidden text-6xl md:text-2xl mt-2 md:mt-0"
    >
      {isDarkMode ? (
        <FaRegMoon className="h-6 w-6 text-gray-300" />
      ) : (
        <GoSun className="h-6 w-6 text-amber-300" />
      )}
    </button>
  );
};
