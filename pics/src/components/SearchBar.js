import './SearchBar.css'

import { useState } from 'react';


function SearchBar({ onSubmit }) {
    
    const [term, setTerm]  = useState('');  // Steg 1

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value);            // Steg 3 & Steg 4 - OBS! Renderer om varje gång vi skriver något i inputten!!!
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                {/* 
                    Steg 2 & Steg 5
                    Vi tar över kontrollen helt här nu
                    och kan lägga till ytterligare funktionalitet när vi
                    sätter 'term'. T.ex. om vi vill filtrera bort något i 
                    inputten vi sätter etc. 
                    */}    
                <label>Enter Search Term</label>    
                <input value={term} onChange={handleChange} autoFocus/>  
            </form>
        </div>
    );
}

export default SearchBar;

// Handling text inputs

// 1 - Create a new piece of state
// 2 - Create an event handler to watch for the 'onChange' event
// 3 - When the 'onChange' event fires, get the vaule from the input (from the Event)
// 4 - Take that value from the input and use it to update your state
// 5 - Pass your state to the input as the -value- prop