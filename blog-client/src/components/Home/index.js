import React from "react";
import SignUpForm from "../SignUpForm";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-page">
      <article className="home-info">
        <h2 className="info-header">Welcome!</h2>
        <p className="info-p">
          This is the place where you can read different articles on every
          topic. If you are inspired enough you can event become a writer.
        </p>
        <div className="image-wrapper">
          <img src="/images/read.jpg" />
        </div>
        <p className="info-p">
          To start please <span className="login-link">Sign Up</span>
        </p>
      </article>
      <section className="home-form">
        <div>
          <SignUpForm></SignUpForm>
        </div>
        <p className="info-p">
          If you are already registered -
          <NavLink to="/login">
            <span className="login-link"> Login</span>
          </NavLink>
        </p>
      </section>
    </section>
  );
};

export default Home;
