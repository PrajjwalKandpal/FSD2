import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/Store";
import { CounterProvider } from "./components/contextapi/CounterContextApi";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <CounterProvider>
        <App />
      </CounterProvider>
    </Provider>
  </StrictMode>
);
