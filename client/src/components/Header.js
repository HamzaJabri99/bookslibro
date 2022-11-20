import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logInOut } from '../store/authSlice';

const Header = () => {
    const { isLoggedIn, user } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    return (
        <nav className='navbar navbar-dark bg-dark'>
            <span className='navbar-brand mb-0 h1'>Bookslibro</span>

            <div>

                {isLoggedIn && (<span span className='mx-3 text-light'>Welcome {user?.name} </span>)}
                <button className='btn btn-outline-light' type='submit' onClick={() => dispatch(logInOut())}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </div>
        </nav >
    );
};

export default Header;