import { Route, Switch } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Routes } from "./routes/route";

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        {Routes.map((route, index) => {
          return (
            <Route
              exact={route.exact}
              key={index}
              path={route.url}
              component={route.component}
            />
          );
        })}
      </Switch>
    <Footer/>
    </>
  );
}

export default App;
