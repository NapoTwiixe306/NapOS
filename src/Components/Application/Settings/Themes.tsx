"use client";
import React, { useEffect, useState } from "react";

export default function Themes() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  useEffect(() => {
    // Mettez à jour la classe du body lors du changement du mode sombre
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
    </>
  );
}
