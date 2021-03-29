import {FC, useState, useContext, SyntheticEvent} from 'react';

import {TextArea, Button} from '../../common';
import {FeedbacksContext} from '../../../contexts';
import {AppContent} from '../../../config';

export const AddFeedbacks: FC = () => {
  const {dispatch} = useContext(FeedbacksContext);
  const {
    addFeedbacks: {title, buttonLabel}
  } = AppContent;
  const [comment, setComment] = useState('');
  const setCommentFromTextArea = (event: any) => {
    const feedback = event.target.value;
    setComment(feedback);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (dispatch) {
      dispatch({
        type: 'ADD_NEW_COMMENT',
        comment: {
          comment,
          date: Date.now()
        }
      });
      setComment('');
    }
  };
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <form onSubmit={handleSubmit} method="post">
        <TextArea variation="primary" name="feedback" onChange={setCommentFromTextArea} value={comment} id="w3review" />
        <br />
        <Button label={buttonLabel} variation="primary" type="submit" disabled={comment === ''} />
      </form>
    </div>
  );
};
