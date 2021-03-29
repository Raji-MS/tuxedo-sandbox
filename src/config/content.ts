export interface AppContentProps {
  addFeedbacks: {
    title: string;
    buttonLabel: string;
    labelText: string;
  };
  showFeedbacks: {
    title: string;
    noFeedBack: string;
  };
}

export const AppContent: AppContentProps = {
  addFeedbacks: {
    title: 'Submit Feedback',
    buttonLabel: 'Post',
    labelText: 'Please enter you feedback'
  },
  showFeedbacks: {
    title: 'Feedbacks',
    noFeedBack: 'No Feednbacks'
  }
};
