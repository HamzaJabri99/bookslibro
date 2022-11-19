import React, { Fragment, useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../../store/bookSlice';
import './book.css';

const PostContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBooks())

    }, [dispatch])
    return (
        <>
            <hr className='my-5' />
            <div className='row'>
                <div className='col'>
                    <BooksList />
                </div>
                <div className='col side-line'>
                    <BookInfo />
                </div>
            </div>
        </>
    );
};

export default PostContainer;