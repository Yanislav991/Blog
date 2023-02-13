import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalState } from "../GlobalStateProvider";

const Navigation = () => {
  const [state, dispatch] = useGlobalState();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({isUserLoggedIn: false})
    localStorage.clear();
    navigate('/')
  }
  return (
    <nav className="navigation">
      <section className="logo-section">
        <NavLink to="/">
          <h1 className="logo">
            My<span>Logo</span>
          </h1>
        </NavLink>
      </section>
      {(() => {
        if (state.isUserLoggedIn) {
          return (
            <section className="links-section">
              <NavLink to="/create-blog">
                <span>Create Blog</span>
              </NavLink>
              <NavLink to="/blogs">
                <span>Blogs</span>
              </NavLink>
              <div className="logout" onClick={() => logout()}>
                <span>Logout</span>
              </div>
            </section>
          );
        } else {
          return (
            <section className="links-section">
              <NavLink to="/login">
                <span>Login</span>
              </NavLink>
            </section>
          );
        }
      })()}
    </nav>
  );
};

export default Navigation;
