import {AnyAction} from 'redux';
import {v4 as uuidv4} from 'uuid';

import {FeedbackProps} from '../contexts';

export const feedbacksReducer = (state: FeedbackProps[], action: AnyAction) => {
  switch (action.type) {
    case 'ADD_NEW_COMMENT':
      return [
        {
          ...action.comment,
          id: uuidv4()
        },
        ...state
      ];
    default:
      return state;
  }
};
