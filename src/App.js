import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import LPRoutes from "./routes/LPRoutes";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import { StrategyProvider } from "./context/StrategyContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StrategyProvider>
          <BrowserRouter>
            <LPRoutes />
          </BrowserRouter>
        </StrategyProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
