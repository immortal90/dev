import React from "react";
import { createRoot } from "react-dom/client";

const jsxElement = <h1>I am a JSX element</h1>;

const header = (
  <div>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </div>
);

const fragment = (
  <>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </>
);

const footer = (
  <footer>
    <p>Copyright &copy; 2024</p>
  </footer>
);

const combinedElement = (
  <div>
    {jsxElement}
    {header}
    {fragment}
    {footer}
  </div>
);

const root = document.getElementById("root");

createRoot(root).render(combinedElement);
