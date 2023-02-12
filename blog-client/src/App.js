import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import authService from "./services/authService";
import CreateBlog from "./components/CreateBlog";

function App() {
  return (
    <div id="content">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            !authService.getCurrentUser() ? <Home /> : <Navigate to="blogs" />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/blogs"
          element={
            authService.getCurrentUser() ? <Blogs /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/create-blog"
          element={
            authService.getCurrentUser() ? (
              <CreateBlog />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
