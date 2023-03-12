import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
    
    const rendererdBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />; // Glöm inte bort KEY!!!
    });

    return <div className="book-list">{rendererdBooks}</div>;
};

export default BookList;