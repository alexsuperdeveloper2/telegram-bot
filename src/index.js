import React , {Suspense} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from "./store";
import loader from './animations/loading.json'
import "./i18n";


import App from "./App";


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={loader}>
        <App />
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
