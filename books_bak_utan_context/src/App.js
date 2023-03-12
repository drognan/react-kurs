import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';


function App() {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);     // Called after first render, also called after rerenders if '[]' variable changed
    // Utan parameter så körs den varje rendering VILKET SKAPAR EN OÄNDLING LOOP DÅ VI HÄMTAR DATA!

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        // Hade vi pushat den här och satt state till books 
        // så hade react optimerat bort renderingen då "current" värde (referens till arrayen) är exakt samma som 
        // det nya värdet. React tycker därför inte att vi behöver rendera om komponenten!
        // ------  books.push({ id: 1234, title: title});  -------

//        const id = Math.round(Math.random() * 9999);      // GAMLA KODEN, MANUELLT UPPDATERA EGET STATE!
//        const updatedBooks = [...books, { id, title }];

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);           // Därför måste vi  skapa ett nytt objekt istället för att trigga en rendering! title: title = title
    };

    const deleteBookById = async (id) => {
        
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const editBookById = async (id, title) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title
        });

        console.log(response);

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                //return { ...book, title };
                return { ...book, ...response.data };       // Knyck hela objektet vi får tillbaks istället. Vad händer om vi har fler properties t.ex.? En användare ändrar antal sidor och en annan ändrar title (optimistic locking/versioning)
            }

            return book;
        });

        setBooks(updatedBooks);
    };
    

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;