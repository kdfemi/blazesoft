import '@testing-library/jest-dom'
import NavBar from 'src/components/navbar'
import { render, screen } from '../__mocks__/mockProvider'
 
describe('NavBar', () => {
  it('renders a navbar', () => {
    render(<NavBar />, {})
 
    const navBar = screen.getByTestId('NavBar')
 
    expect(navBar).toBeInTheDocument()
  })
})