import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
export const getBooks = createAsyncThunk('book/getBooks', async (args, thunkAPI) => {
    try {
        const resp = await fetch('http://localhost:3009/books');
        const data = await resp.json();
        return data;
    }
    catch (err) {
        console.log(err)
    }
});
const bookSlice = createSlice({
    name: 'book',
    initialState: { books: null },
    extraReducers: {
        [getBooks.pending]: (state, action) => { console.log(action) },
        [getBooks.fulfilled]: (state, action) => { console.log(action) },
        [getBooks.rejected]: (state, action) => { console.log(action) }
    }
})
export default bookSlice.reducer
