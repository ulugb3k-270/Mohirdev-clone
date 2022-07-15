import React, { useState } from "react";

// STYLES
import "./auth.scss";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { AiFillCloseCircle } from "react-icons/ai";

const Signin = ({ signInPopUpClass, setSignInPopUpClass }) => {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form className={`auth__form ${signInPopUpClass}`} onSubmit={submitForm}>
      <AiFillCloseCircle onClick={() => setSignInPopUpClass("")} />
      <h2 className="auth__form-paragraph">Login</h2>
      <p className="auth__form-text">
        Hello there, haven’t we seen you before?
      </p>
      <input
        type="text"
        placeholder="Username"
        value={form.userName}
        onChange={handleChange}
        name="userName"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <div className="auth__form-bottom">
        <div>
          <input type="checkbox" />
          <p>Remember Me</p>
        </div>
        <Link to="/">Forget your password?</Link>
      </div>

      <button className="auth__form-btn" type="submit">
        Login Now
      </button>
      <p>
        New here? <Link to="/">Sign Up</Link>
      </p>
    </form>
  );
};

export default Signin;
