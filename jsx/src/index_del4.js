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

    // Rendering
    return (
        <textarea autoFocus={true}></textarea>                  
    );

    // 5 Regler för att konvertera HTML till JSX

    // 1) Alla properties är camelCase (jämför autofocus och autoFocus där det första är ett HTML attribut och det andra är en JSX property)
    // 2) Siffror wrappas i {} istället för "" (maxlength="5" vs maxLength={5})
    // 3) Booleans I JSX kan man fuska lite med boolean=true (spellcheck="true" vs spellcheck) ... men vid false behöver man explicit uttrycka det (spellcheck={false})
    // 4) HTML class blir className (class="divider" vs className="divider")    (class finns i javascript)
    // 5) I JSX använder man objekt för in-line styling (style="text-decoration: 'none'; padding: '5px';" vs style={{ textDecoration: 'none', padding: '5px'}} )
                                                       
}

// 5) Show the component on the screen
root.render(<App />);                                   // <-- JSX (jsx -> babel -> webpack -> bundle.js)