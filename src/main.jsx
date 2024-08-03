import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const spans = document.querySelectorAll("#title span");
setInterval(() => {
  spans.forEach((span) => span.classList.remove("shake")); // Remove shake from all spans
  const randomIndex = Math.floor(Math.random() * spans.length);
  // const randomIndex2 = Math.floor(Math.random() * spans.length);
  spans[randomIndex].classList.add("shake");
  // spans[randomIndex2].classList.add("shake");
}, 500); // Change interval time as needed
