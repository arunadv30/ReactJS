import React, { useState } from "react";

const Login = () => {
  let [user, setUser] = useState({ name: "", password: "" });
  let nameHandler = (event) => {
    setUser({ ...user, name: event.target.value });
  };
  let passwordHandler = (event) => {
    setUser({ ...user, password: event.target.value });
  };
  let submitHandler = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
      <br />
      <br />
      <h2>Login Details</h2>
      <form onSubmit={submitHandler}>
        <label>UserName:</label>
        <input type="text" onChange={nameHandler} /> <br /> <br />
        <label>Password:::</label>
        <input type="password" onChange={passwordHandler} /> <br /> <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
