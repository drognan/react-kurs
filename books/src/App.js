import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

import useBooksContext from './hooks/use-books-context';

function App() {            // Function components vs Class based components

    const { fetchBooks } = useBooksContext();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);       // Använder vi fetchBooks här så kommer vi få en oändlig loop då fetchBooks skapas om vid re-rendering
                            // ... Därför returnerar vi nu en useCallback kring fetchBooks() för att alltid hämta en stabil referens till samma funktion
    

    // Called after first render, also called after rerenders if '[]' variable changed
    // Utan parameter så körs den varje rendering VILKET SKAPAR EN OÄNDLING LOOP DÅ VI HÄMTAR DATA!
    // OBS att här får vi 'Stale Variable Reference'-problemet och ESLint gnäller på det!

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;