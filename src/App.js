// import React, { useEffect, useState } from "react";
// import "./App.scss";
// import { Provider } from "react-redux";
// import AppRoutes from "./routes/AppRoutes";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./store/index";
// import { StrategyProvider } from "./context/StrategyContext";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if user is already logged in on component mount
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = () => {
//     // For demonstration purposes, let's assume login is successful
//     // In a real application, this should be replaced with actual login logic
//     localStorage.setItem("token", "dummyToken");
//     setIsLoggedIn(true);
//   };

//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <StrategyProvider>
//           {isLoggedIn ? (
//             <AppRoutes />
//           ) : (
//             <div>
//               <p>Please login</p>
//               <button onClick={handleLogin}>Login</button>
//             </div>
//           )}
//         </StrategyProvider>
//       </PersistGate>
//     </Provider>
//   );
// }

// export default App;

import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import { StrategyProvider } from "./context/StrategyContext";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StrategyProvider>
          <AppRoutes />
        </StrategyProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
