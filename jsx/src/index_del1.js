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

    /*let message = 'Bye there!';                         // text eller nummer. undefined, array, null beter har ett oväntat beneende

    if (Math.random() > 0.5) {
        message = 'Hello there!';
    }

    return <h1>{message}</h1>;                          // <-- JSX (A small instruction on what should be displayed on screen). babeljs.io/repl
                                                        // Mustache?*/


    return <h1>{new Date().toLocaleTimeString()}</h1>;  // evaluerar uttryck

                                                        
}

// 5) Show the component on the screen
root.render(<App />);                                   // <-- JSX (jsx -> babel -> webpack -> bundle.js)