import React, { useState } from "react";

const Registration = () => {
  let [user, setUser] = useState({ uname: "", email: "", mob: "" });

  // let uNameHandler = (event) => {
  //   setUser({ ...user, uname: event.target.value });
  // };
  // let emailHandler = (event) => {
  //   setUser({ ...user, email: event.target.value });
  // };
  // let mobileHandler = (event) => {
  //   setUser({ ...user, mob: event.target.value });
  // };
  let updateHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  let submitHandler = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <React.Fragment>
      {" "}
      <br />
      <br />
      <br />
      <pre>{JSON.stringify(user)}</pre>
      <h1>Registration Form</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="name"
          onChange={updateHandler}
          name="uname"
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={updateHandler}
          name="email"
        />
        <br /> <br />
        <input
          type="number"
          placeholder="mobile number"
          onChange={updateHandler}
          name="mob"
        />
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
    </React.Fragment>
  );
};

export default Registration;
