import { useState } from 'react';
import Sidebar from '../Dashboard/SideBarSection/Sidebar';
import BookList from './BookList';
import OtherUserBooksList from './OtherUserBookList';
import BookForm from './BookForm';
import './BooksPage.css';

const BooksPage = () => {
  const [newBook, setNewBook] = useState(null);

  const handleBookAdded = (book) => {
    setNewBook(book);
  };

  return (
    <div className="books-page flex">
      <div className="booksPageContainer flex">
        <div className="main-content">
          <h1>Gerenciar Livros</h1>
          <div className="content-container">
            <div className="book-list-container">
              <BookList newBook={newBook} />
            </div>
            <div className="book-form-container">
              <BookForm onBookAdded={handleBookAdded} />
            </div>
            <div className="other-user-books-container">
              <OtherUserBooksList />
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default BooksPage;
