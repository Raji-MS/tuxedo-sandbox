import React, {createContext, useReducer, useEffect, useState, Dispatch} from 'react';
import {feedbacksReducer} from '../reducers';

export interface FeedbacksContextActionTypes {
  dispatch: Dispatch<any>;
  feedbacksLists: FeedbackProps[];
  newListForm: boolean;
  showNewListForm: any;
}

export interface FeedbackProps {
  comment: string;
  date: number;
}

export const FeedbacksContext = createContext<Partial<FeedbacksContextActionTypes>>({});

export const FeedbacksContextProvider = (props: any) => {
  const [newListForm, showNewListForm] = useState(false);
  const [feedbacksLists, dispatch] = useReducer(feedbacksReducer, [], () => {
    const data = localStorage.getItem('feedback');
    return data ? JSON.parse(data) : [];
  });
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedbacksLists));
  }, [feedbacksLists]);
  return (
    <FeedbacksContext.Provider value={{feedbacksLists, newListForm, showNewListForm, dispatch}}>
      {props.children}
    </FeedbacksContext.Provider>
  );
};
