import React from "react";

import Home from "./view/Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    </>
  );
}
export default App;
