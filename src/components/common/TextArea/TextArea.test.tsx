import {fireEvent, render, screen} from '@testing-library/react';
import {TextArea} from './TextArea';

test('renders Text Area With Label', () => {
  const onChange = jest.fn();
  const {container} = render(
    <TextArea id="comments" name="comments" labelText="Enter your comments" variation="primary" onChange={onChange} />
  );
  const labelElement = screen.getByText(/Enter your comments/i);
  const textAreaElement = container.querySelector('textarea');
  if (textAreaElement) {
    fireEvent.change(textAreaElement, {target: {value: 'Feedback text'}});
    expect(onChange).toBeCalled();
  }
  expect(labelElement).toBeInTheDocument();
});

test('renders Text Area Without Label', () => {
  render(<TextArea id="comments" name="comments" variation="primary" />);
  expect(screen.queryByText(/Enter your comments/i)).not.toBeInTheDocument();
});
