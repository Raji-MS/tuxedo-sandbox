import {render, screen} from '@testing-library/react';

import {ShowFeedbacks} from './ShowFeedbacks';
import {AppContent} from '../../../config';
import {FeedbacksContext} from '../../../contexts';

test('Validate Showfeedback', () => {
  const {
    showFeedbacks: {title}
  } = AppContent;
  const feedbacksLists = [{comment: 'test comment', date: 1617036860115}];
  const {container} = render(
    <FeedbacksContext.Provider value={{feedbacksLists}}>
      <ShowFeedbacks />
    </FeedbacksContext.Provider>
  );
  const rowElement = container.querySelector('tr');
  expect(rowElement).toBeInTheDocument();
  const labelElement = screen.getByText(title);
  expect(labelElement).toBeInTheDocument();
});
