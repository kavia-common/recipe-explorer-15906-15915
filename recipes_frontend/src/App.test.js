import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const title = screen.getByText(/Recipe Explorer/i);
  expect(title).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/search recipes/i);
  expect(input).toBeInTheDocument();
});
