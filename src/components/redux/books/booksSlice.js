const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        books: [...state.books, action.payload],
      };
    case 'DELETE_BOOK':
      return {
        books: state.books.filter((book) => book.title !== action.payload),
      };

    default:
      return {
        state,
      };
  }
};
