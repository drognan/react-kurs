function App(param) {                // App = naming convention
    // Logik

    // Rendering
    return (
        <textarea autoFocus={true}>{param}</textarea>                  
    );
}
// Default export (kan döpas om vid import)
export default App;

const number = 1234;
// Named export (går inte döpa om)
export { number };


// 1) Create a new file (by convention start with capital letter)
// 2) Make your component. Should be a function that returns JSX
// 3) Export the component at the bottom of the file
// 4) Import the component into another file
// 5) Use the component