import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const isUserLogged = localStorage.getItem("token") !== null;
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
        if (isUserLogged) {
          return (
            <section className="links-section">
              <NavLink to="/blogs">
                <span>Blogs</span>
              </NavLink>
              <NavLink to="/recent-posts">
                <span>Recent Posts</span>
              </NavLink>
              <NavLink to="/logout">
                <span>Logout</span>
              </NavLink>
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
