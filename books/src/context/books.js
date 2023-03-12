import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {           // <App /> i det här fallet JSX!

    const [books, setBooks] = useState([]);

    // Skapar en ny pilfunktion vid rerender!!!! ny minnesplats. Var försiktig att använda denna vid t.ex. useEffect(() => .., [fetchBooks]) för då triggar den igång en infinit loop!
    const fetchBooks = useCallback(async () => {        // Skapas varje frame, men pekar alltid på samma funktion! sparas som en stable reference istället (Meomized)
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }, []);

    // Skapar en ny pilfunktion vid rerender!!!! ny minnesplats
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



    // Skapar en ny pilfunktion vid rerender!!!! ny minnesplats
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

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                //return { ...book, title };
                return { ...book, ...response.data };       // Knyck hela objektet vi får tillbaks istället. Vad händer om vi har fler properties t.ex.? En användare ändrar antal sidor och en annan ändrar title (optimistic locking/versioning)
            }

            return book;
        });

        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        setBooks,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export default BooksContext;

export { Provider };