import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBook } from 'src/types/book'

export interface BookState {
  books: Record<string, IBook>;
}

const initialState: BookState = {
  books: {},
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Omit<IBook, 'id'>>) => {
      const id = window.crypto.randomUUID().toString();
      const {payload} = action;
      const book: IBook = {...payload, id}
      state.books[id] = book;
    },
    updateBook: (state, action: PayloadAction<IBook>) => {
      const {payload} = action;
      state.books[payload.id] = payload;
    },
    deleteBook: (state, action: PayloadAction<{id: string}>) => {
        const {id} = action.payload;
      if(state.books[id]) {
        delete state.books[id];
      }
    },
  },
})

export const { addBook, deleteBook, updateBook } = bookSlice.actions

export default bookSlice.reducer