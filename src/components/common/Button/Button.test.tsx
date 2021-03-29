import {fireEvent, render, screen} from '@testing-library/react';
import {Button} from './Button';

test('renders Button With Label', () => {
  render(<Button label="Submit" variation="primary" type="submit" />);
  const btnElement = screen.getByText(/Submit/i);
  expect(btnElement).toBeInTheDocument();
});
