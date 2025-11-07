// Em: src/main.jsx

import React from "react"; // (Boa prática importar o React)
import { createRoot } from "react-dom/client"; // <-- Sua importação correta
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// CORREÇÃO: Remova o 'ReactDOM.'
// Use a função 'createRoot' diretamente.
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);