import '@testing-library/jest-dom'
import NavBar from 'src/components/navbar'
import { render, screen } from '../__mocks__/mockProvider'
 
describe('NavBar', () => {
  it('should render a navbar', () => {
    render(<NavBar />, {})
 
    const navBar = screen.getByTestId('NavBar')
 
    expect(navBar).toBeInTheDocument()
  })
  it('should render search input element', () => {
    render(<NavBar  />);
    const inputElement = screen.getByPlaceholderText(/What are you looking for ?/i);
    expect(inputElement).toBeInTheDocument();
  })
  it('should render add book button', () => {
    render(<NavBar  />);
    const inputElement = screen.queryAllByTestId(/Add Book/i);
    expect(inputElement.length).toBeGreaterThanOrEqual(1);
  })

})