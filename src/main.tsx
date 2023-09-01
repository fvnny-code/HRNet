import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import { persistStor, store } from "./store/Store.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistStor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);
