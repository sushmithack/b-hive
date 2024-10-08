import React from "react";
import BookingPage from "./pages/BookingPage";
import store from "./store";
import { Provider } from "react-redux";

import "typeface-inter";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BookingPage />
    </Provider>
  );
}

export default App;
