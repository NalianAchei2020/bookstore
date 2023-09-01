import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

export const postBooks = createAsyncThunk('books/fetchBooks', async (book) => {
  try {
    const response = await axios.post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/L1jzAxtfHqaWNb2emGE3/books',
      book,
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const removeBooks = createAsyncThunk(
  'books/removeBooks',
  async (bookId) => {
    try {
      const response = await axios.delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/L1jzAxtfHqaWNb2emGE3/books/${bookId}`,
        bookId,
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);
export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/L1jzAxtfHqaWNb2emGE3/books',
    );
    const { data } = response;
    const bookIds = Object.keys(data);
    const books = bookIds.map((id) => ({ id, ...data[id][0] }));
    return books;
  } catch (error) {
    return error.message;
  }
});
const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = [...state.books, action.payload];
      state.error = '';
    });
    builder.addCase(postBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(removeBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
      state.error = '';
    });
    builder.addCase(removeBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = Object.values(action.payload).flatMap(
        (bookArray) => bookArray,
      );
      state.error = '';
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default bookSlice.reducer;
