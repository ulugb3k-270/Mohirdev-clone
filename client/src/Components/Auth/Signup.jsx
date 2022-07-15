import React from "react";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import "./auth.scss";

const Signup = ({ signUpPopUpClass, setSignUpPopUpClass }) => {
  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDeafult();

    console.log(form);
  };

  return (
    <form
      className={`auth__form ${signUpPopUpClass}`}
      
      onSubmit={submitForm}
    >
      <AiFillCloseCircle onClick={() => setSignUpPopUpClass("")} />
      <h2 className="auth__form-paragraph">Sign Up</h2>

      <input
        type="text"
        placeholder="Full Name"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Username"
        name="userName"
        value={form.userName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <button className="auth__form-btn signup__form-btn" type="submit">
        REGISTER NOW
      </button>
    </form>
  );
};

export default Signup;
