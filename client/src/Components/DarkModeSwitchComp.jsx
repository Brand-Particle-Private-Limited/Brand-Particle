import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useThemeContext } from "../Context/ThemeMode"; // Import the context hook

const DarkModeSwitchComp = () => {
  const { theme, toggleTheme } = useThemeContext(); // Destructure theme and toggleTheme from context
  const [isDarkMode, setDarkMode] = useState(theme === "light" ? true : false); // Default is dark mode

  // Toggle handler
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode); // Properly set the state
    toggleTheme(); // Call the toggleTheme function from context to switch between light and dark modes
  };

  return (
    <DarkModeSwitch
      checked={isDarkMode} // Pass the current state
      onChange={toggleDarkMode} // Valid toggle function
      size={25} // Adjust size
      sunColor="#fff"
      moonColor="#000"
    />
  );
};

export default DarkModeSwitchComp;
