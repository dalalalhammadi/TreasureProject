import React, { useState } from "react";
import authStore from "../stores/authStore";
import { AuthButtonStyled } from "../Styles";

const SigninForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
  };
  return (
    <div>
      <h3>Signin</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            type="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <AuthButtonStyled className="btn float-right" type="submit">
          Sign in
        </AuthButtonStyled>
      </form>
    </div>
  );
};

export default SigninForm;
