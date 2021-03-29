import {render, screen, fireEvent} from '@testing-library/react';
import {AddFeedbacks} from './AddFeedbacks';
import {FeedbacksContext} from '../../../contexts';
import {AppContent} from '../../../config';
test('Validate Addfeedback', () => {
  const {
    addFeedbacks: {title}
  } = AppContent;
  const {container} = render(<AddFeedbacks />);
  const labelElement = screen.getByText(title);
  const textAreaElement = container.querySelector('textarea');
  if (textAreaElement) {
    fireEvent.change(textAreaElement, {target: {value: 'Feedback text'}});
    expect(textAreaElement).toHaveValue('Feedback text');
  }
  expect(labelElement).toBeInTheDocument();
});

test('Validate submit', () => {
  const {
    addFeedbacks: {title}
  } = AppContent;
  const dispatch = jest.fn();
  const {container} = render(
    <FeedbacksContext.Provider value={{dispatch}}>
      <AddFeedbacks />
    </FeedbacksContext.Provider>
  );
  const labelElement = screen.getByText(title);
  const textAreaElement = container.querySelector('textarea');
  const formElement = container.querySelector('form');
  if (formElement && textAreaElement) {
    fireEvent.submit(formElement);
    textAreaElement.value = 'Feedback text';
    expect(textAreaElement).toHaveValue('Feedback text');
    expect(dispatch).toHaveBeenCalledTimes(1);
  }
  expect(labelElement).toBeInTheDocument();
});
