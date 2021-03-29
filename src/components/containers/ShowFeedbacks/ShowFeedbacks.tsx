import {FC, useContext} from 'react';

import {FeedbacksContext, FeedbackProps} from '../../../contexts';
import {AppContent} from '../../../config';

export const ShowFeedbacks: FC = () => {
  const {feedbacksLists = null} = useContext(FeedbacksContext);
  const {
    showFeedbacks: {title, noFeedBack}
  } = AppContent;
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      {feedbacksLists && feedbacksLists.length ? (
        <>
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
      ) : (
        <div>{noFeedBack}</div>
      )}
    </div>
  );
};
