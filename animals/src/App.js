import './App.css';     // En vanlig fil, bara importera

import { useState } from 'react';
import AnimalShow from './AnimalShow';



function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(  Math.random() * animals.length)]
}

console.log(getRandomAnimal());




// React renderar om hela den här komponenten när vi kör setCount(x + 1)????
function App() {

    // Array destructuring
    //const [ count, setCount ] = useState(0);

    const [animals, setAnimals] = useState([]);

    // count = The piece of state! starts as 0, changes over time
    // setCount = setter function. Used to Update our piece of state
    // useState(0). Default value for this piece for state = 0


    // Arrow function
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);  // Skapar en ny array. Tar med allt som finns i animals och lägger till randomAnimal
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} /> // Key är till för React, för att hålla reda på alla element
    });

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}

export default App;