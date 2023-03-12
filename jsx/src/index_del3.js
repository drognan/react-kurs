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
    const inputType = "number";
    const minValue = 5;

    // Rendering
    return (
        <input style={{ color: 'red' }} type={inputType} min={minValue} max={10}></input>   // OBS!!! Det här är "Properties" på ett react-element. Skillnad på HTML attribut och React Properties!!!
    );

    // OBS! Regler för nummer och strängar
    //<input type="number" min={5}></input>   

    // Strängar = ""
    // Siffror =    {} => {5}
    // Array =    {[]} => {[1,2,3]} 
    // Object =   {{}} => {{ color: 'red' }}
    // Variabler = {}  => {varname}
                                                        
}

// 5) Show the component on the screen
root.render(<App />);                                   // <-- JSX (jsx -> babel -> webpack -> bundle.js)