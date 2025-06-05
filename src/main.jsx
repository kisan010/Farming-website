import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./Components/ErrorBoundries.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <ToastContainer />
      <App />
    </ErrorBoundary>
  </StrictMode>
);
