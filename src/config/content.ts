export interface AppContentProps {
  addFeedbacks: {
    title: string;
    buttonLabel: string;
  };
  showFeedbacks: {
    title: string;
  };
}

export const AppContent: AppContentProps = {
  addFeedbacks: {
    title: 'Submit Feedback',
    buttonLabel: 'Post'
  },
  showFeedbacks: {
    title: 'Feedbacks'
  }
};
