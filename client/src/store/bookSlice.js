import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { logInsert } from "./reportSlice";
export const getBooks = createAsyncThunk('book/getBooks', async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        //dispatch({type:book/getBooks/pending},payload:undefined)
        const resp = await fetch('http://localhost:3009/books');
        const data = await resp.json();

        return data;
        //dispatch({type:book/getBooks/fullfilled},payload:data)
    }
    catch (err) {
        return rejectWithValue(err.message);
        //dispatch({type:book/getBooks/rejected},payload:err)
    }
});
export const addBook = createAsyncThunk('book/addBook', async (bookData, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI
    try {
        const resp = await fetch('http://localhost:3009/books', {
            method: 'POST',
            body: JSON.stringify(bookData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        });
        const data = await resp.json();
        dispatch(logInsert({ name: 'insertBook', status: 'success' }))
        return data;
    } catch (err) {
        return rejectWithValue(err.message);
    }
})
export const deleteBook = createAsyncThunk('book/deleteBook', async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        await fetch(`http://localhost:3009/books/${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        return item;
    } catch (err) {
        return rejectWithValue(err.message)
    }

})
const bookSlice = createSlice({
    name: 'book',
    initialState: { books: [], isLoading: false, error: false },
    extraReducers: {
        //getBooks 
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = false;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = true;
        },
        //addBook
        [addBook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = false;
        },
        [addBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books.push(action.payload)
        },
        [addBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = true;
        },
        //delete Book
        [deleteBook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = false;
        },
        [deleteBook.fulfilled]: (state, action) => {
            state.isLoading = false;

            state.books = state.books.filter((book) => book.id !== action.payload.id)
        },
        [deleteBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = true;
        },
    }
})
export default bookSlice.reducer
