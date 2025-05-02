// Update the main.tsx file to import the new CSS location
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add page-loaded class to body when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");
});

createRoot(document.getElementById("root")!).render(<App />);
