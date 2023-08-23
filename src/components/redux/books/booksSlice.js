import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books.filter((book) => book.title !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
