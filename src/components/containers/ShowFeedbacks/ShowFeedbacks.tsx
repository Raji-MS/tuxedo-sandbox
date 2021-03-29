import {FC, useContext} from 'react';

import {FeedbacksContext, FeedbackProps} from '../../../contexts';
import {AppContent} from '../../../config';

export const ShowFeedbacks: FC = () => {
  const {feedbacksLists = null} = useContext(FeedbacksContext);
  const {
    showFeedbacks: {title}
  } = AppContent;
  return (
    <div className="container">
      {feedbacksLists && feedbacksLists.length ? (
        <>
          <h2 className="title">{title}</h2>
          <table>
            <tbody>
              {feedbacksLists.map((comment: FeedbackProps) => (
                <tr key={`feedbacks_${comment.date}`}>
                  <td>{comment.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </div>
  );
};
