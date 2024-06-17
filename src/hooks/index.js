// export * from "./useAuth";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./redux/store";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  </React.StrictMode>
);
