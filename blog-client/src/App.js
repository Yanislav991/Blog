import "./App.css";
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import authService from "./services/authService";
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
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/blogs"
            element={<Blogs />}
          />
          <Route
            path="/create-blog"
            element={
              <CreateBlog />
            }
          />
        </Routes>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
