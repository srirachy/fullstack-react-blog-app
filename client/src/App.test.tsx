import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// write component tests here
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/cmty-app--component/i);
  expect(linkElement).toBeInTheDocument();
});
