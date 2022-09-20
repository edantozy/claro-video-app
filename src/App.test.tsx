import { render, screen } from '@testing-library/react';
import ClaroVideoApp from './ClaroVideoApp';

test('renders learn react link', () => {
  render(<ClaroVideoApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
