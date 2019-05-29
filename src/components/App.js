import React from 'react';
import UserInput from '../containers/UserInput';
import PredictionsContainer from '../containers/PredictionsContainer';
function App () {
  return (
    <div className="App">
      <UserInput />
      <PredictionsContainer />
    </div>
  );
}

export default App;
