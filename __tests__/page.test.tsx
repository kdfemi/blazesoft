import '@testing-library/jest-dom'
import { fireEvent, render, screen, store, waitFor } from '../__mocks__/mockProvider'
import Page from 'src/app/page';
import { addBook } from 'src/store/slice/books';

const MockPage = () => {
  return (
    <>
      <Page />
      <div id="custom-modal"/>
    </>

  )
}
describe('Page', () => {
  it('Ensure Page is empty', () => {
    render(<MockPage />, {})
 
    const books = screen.queryAllByTestId('book')
    expect(books).toHaveLength(0)
  })
  it('Ensure Page is not empty', async () => {
    const mockStore = store();
    await mockStore.dispatch(addBook({category: 'Lol', description: 'Lol', name: 'LOL', price: 20}))
    const { books: mybooks } = mockStore.getState().booksState;
    render(<MockPage />, {initialState: {booksState: {books: mybooks}}})
 
    const books = screen.queryAllByTestId('book')
    expect(books.length).toBeGreaterThanOrEqual(1)
  })
  it('Ensure Modal should show', async () => {
    
    render(<MockPage />)
 
    const buttonElements = screen.queryAllByTestId(/Add Book/i)
    fireEvent.click(buttonElements[0]);
    expect(screen.queryByTestId('modal')).toBeInTheDocument()
  })
})