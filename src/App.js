import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./components/Login";
import Register from "./components/Register";

import { SnackbarProvider } from "notistack";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <Router>
         

            <Routes>
              <Route
                path="/login"
                element={ <Login />}
              />
              <Route
                path="/register"
                element={
              <Register /> 
                }
              />
              <Route
                path="/dashboard"
                element={<Dashboard />}
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
  
        </Router>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
