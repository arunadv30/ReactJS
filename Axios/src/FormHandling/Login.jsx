import React, { useState } from "react";

const Login = () => {
  let [user, setUser] = useState({ name: "", password: "" });
  {
    /*Single handler to all the event handlers */
  }
  let updateHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
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
        <input type="text" onChange={updateHandler} name="name" /> <br /> <br />
        <label>Password:::</label>
        <input type="password" onChange={updateHandler} name="password" />
        <br /> <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
