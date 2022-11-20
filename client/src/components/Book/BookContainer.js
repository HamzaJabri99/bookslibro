import React, { useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useSelector, useDispatch } from 'react-redux'
import { getBooks, getBook } from '../../store/bookSlice';
import './book.css';

const PostContainer = () => {

    const { isLoading, books, book } = useSelector(state => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks())

    }, [dispatch])
    const getBookId = (book) => {
        dispatch(getBook(book)).then((data) => { console.log(data) });

    }
    return (
        <>
            <hr className='my-5' />
            <div className='row'>
                <div className='col'>
                    <BooksList isLoading={isLoading} books={books} getBook={getBook} getBookId={getBookId} />
                </div>
                <div className='col side-line'>
                    <BookInfo book={book} />
                </div>
            </div>
        </>
    );
};

export default PostContainer;