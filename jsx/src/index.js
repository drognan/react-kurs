// 1) Import the React and ReactDOM libraries
import React from 'react';      // Library that defines what a component is and how multiple components work together
import ReactDOM from 'react-dom/client'; // Library that knows how to get a component to show up in the browser                 (node modules när man inte anger absolut/relativ path)
import LeifApp, { number as aoeu } from './App'         // default + named import


// React kan återanvändas för att skapa komponenter i t.ex. en telefon (React Native) etc. ReactDOM är till för webläsaren only!

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<LeifApp binding={aoeu} />);                                   // <-- JSX (jsx -> babel -> webpack -> bundle.js)