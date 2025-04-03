
// Update the main.tsx file to import the new CSS location
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './frontend/styles/app.css'

createRoot(document.getElementById("root")!).render(<App />);
