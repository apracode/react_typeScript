import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import TodoPage from "./pages/TodoPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar  />
        <div className="container">
          <Switch>
            <Route component={TodoPage} path="/" exact />
            <Route component={About} path="/about" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
