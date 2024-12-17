import React from "react";
import Axios from "axios";

const Users = () => {
  let [users, setUsers] = React.useState([]);
  let getHandler = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setUsers(resp.data);
        console.log(resp);
        console.log(resp.data);
        console.log(resp.status);
      })
      .catch();
  };

  return (
    <div>
      <h2>User Component</h2>
      <pre>{JSON.stringify(users)}</pre>
      <button onClick={getHandler}> Click</button>
    </div>
  );
};

export default Users;
