import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import MessageBoard from "./components/MessageBoard";
import configureStore from "./redux/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <MessageBoard />
      </div>
    </ReduxProvider>
  );
}

export default App;
