import React, { useEffect, useState } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useSelector, useDispatch } from 'react-redux'
import { getBooks, getBook } from '../../store/bookSlice';
import './book.css';

const PostContainer = () => {
    const [selectedBook, setSelectedBook] = useState({})
    const { isLoading, books, book } = useSelector(state => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks())

    }, [dispatch])
    const getBookId = (book) => {
        //dispatch(getBook(book)).then((data) => { console.log(data) });
        const selectedBook = books.find((item) => item.id === book.id)
        setSelectedBook(selectedBook);


    }
    return (
        <>
            <hr className='my-5' />
            <div className='row'>
                <div className='col'>
                    <BooksList isLoading={isLoading} books={books} getBook={getBook} getBookId={getBookId} />
                </div>
                <div className='col side-line'>
                    <BookInfo book={selectedBook} />
                </div>
            </div>
        </>
    );
};

export default PostContainer;