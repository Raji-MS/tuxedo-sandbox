import {FeedbacksContextProvider} from './contexts';
import {AddFeedbacks, ShowFeedbacks} from './components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <FeedbacksContextProvider>
        <AddFeedbacks />
        <ShowFeedbacks />
      </FeedbacksContextProvider>
    </div>
  );
}

export default App;
