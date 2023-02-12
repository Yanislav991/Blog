import "./App.css";
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import Guard from './components/Guard'
import CreateBlog from "./components/CreateBlog";
import GlobalStateProvider from "./components/GlobalStateProvider";

function App() {
  return (
    <GlobalStateProvider>
      <div id="content">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <Guard name={"Home"}>
                <Home />
              </Guard>
            }
          />
          <Route
            path="/login"
            element={
              <Guard name={"Login"}>
                <Login />
              </Guard>
            }
          />
          <Route
            path="/blogs"
            element={
              <Guard name={"Blogs"}>
                <Blogs />
              </Guard>
            }
          />
          <Route
            path="/create-blog"
            element={
              <Guard name={"CreateBlog"}>
                <CreateBlog />
              </Guard>
            }
          />
        </Routes>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
