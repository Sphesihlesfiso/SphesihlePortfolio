import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button id="theme-toggle" onClick={toggleTheme}>
      {theme==="dark"?< i class="bi bi-brightness-high"></i>:< i class="bi bi-moon-fill"></i>}
    </button>
  );
}

export default ThemeToggle;
