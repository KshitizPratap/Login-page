import classes from './App.module.css';
import Form from './component/FeedbackForm'
import { useEffect } from 'react';

function App() {

  return (
    <div className={classes.App}>
      <Form />
    </div>
  );
}

export default App;
