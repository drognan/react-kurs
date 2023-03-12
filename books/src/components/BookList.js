import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {

    const { books } = useBooksContext();        // Custom hook (reusable code?)

    const rendererdBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });

    return (
        <div className="book-list">
            {rendererdBooks}
        </div>
    )
};

export default BookList;