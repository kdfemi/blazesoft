import '@testing-library/jest-dom'
import { render, screen } from '../__mocks__/mockProvider'
import Button from 'src/components/button'
 
describe('Button', () => {
  it('renders a button', () => {
    render(<Button />, {})
 
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})