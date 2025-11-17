
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";


export default function Theme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {theme === "Dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
