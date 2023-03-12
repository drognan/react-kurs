// 1) Import the React and ReactDOM libraries
import React from 'react';      // Library that defines what a component is and how multiple components work together
import ReactDOM from 'react-dom/client'; // Library that knows how to get a component to show up in the browser
// React kan återanvändas för att skapa komponenter i t.ex. en telefon (React Native) etc. ReactDOM är till för webläsaren only!

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {

    // Logik
    const name = 'Björn';
    const age = '43';

    // Rendering
    return (
        <h1>Hej! Jag heter {name} och är {age} år</h1>  // evaluerar uttryck
    );
                                                        
}

// 5) Show the component on the screen
root.render(<App />);                                   // <-- JSX (jsx -> babel -> webpack -> bundle.js)