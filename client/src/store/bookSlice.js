import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
export const getBooks = createAsyncThunk('book/getBooks', async (args, thunkAPI) => {
    try {
        //dispatch({type:book/getBooks/pending},payload:undefined)
        const resp = await fetch('http://localhost:3009/books');
        const data = await resp.json();
        return data;
        //dispatch({type:book/getBooks/fullfilled},payload:data)
    }
    catch (err) {
        return err;
        //dispatch({type:book/getBooks/rejected},payload:err)
    }
});
const bookSlice = createSlice({
    name: 'book',
    initialState: { books: null, isLoading: false },
    extraReducers: {
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;

        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            console.log(action)
        }
    }
})
export default bookSlice.reducer
