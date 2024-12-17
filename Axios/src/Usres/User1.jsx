import React, { useEffect, useState } from "react";
import Axios from "axios";

const User1 = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch();
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(users)}</pre>
      {/*to write js code in react use {}-react expression */}
      {users.length > 0 ? (
        <>
          <table border={2}>
            <thead>
              <th>Id</th>
              <th>Name</th>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h3>No Data</h3>
      )}
    </div>
  );
};

export default User1;
