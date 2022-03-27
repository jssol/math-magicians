import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const resetBtn = screen.getByText(/AC/i);
  expect(resetBtn).toBeInTheDocument();
});
