import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders Feedback form', () => {
  const {container} = render(<App />);
  const linkElement = container.querySelector('form');
  expect(linkElement).toBeInTheDocument();
});
