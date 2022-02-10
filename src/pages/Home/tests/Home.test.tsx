import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../Home';
import { BrowserRouter } from "react-router-dom";

test('renders "go to movies page" link', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Go to movies page/i);
  expect(linkElement).toBeInTheDocument();
});
