import React from "react";
import styles from "./index.module.scss";

export default function LandingPage() {
  const { container, p } = styles;
  return (
    <>
      <div data-test="container" className={container}>
        this is the landing page
        <button data-test="loginButton">
          <a href="/api/login">Login</a>
        </button>
        <button data-test="signUpButton">Sign Up</button>
      </div>
    </>
  );
}
