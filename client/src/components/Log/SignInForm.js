import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/user";
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };
  return (
    <div className="form">
      <form action="" onSubmit={handleLogin} id="SignUpForm">
        <label htmlFor="email">E-mail</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="email error"></div>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="password error"></div>
        <br />
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default SignIn;
