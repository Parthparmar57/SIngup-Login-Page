import React from "react";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign up
          </button>
        </div>
        {isLogin ? (
          <div className="form" action="">
            <h2>Login Form</h2>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <a href="#">Forgot Password?</a>
            <button type="submit">Login</button>
            <p>
              Don't have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          </div>
        ) : (
          <form className="form" action="">
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
