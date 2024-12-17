import React from "react";
import Axios from "axios";

class Users2 extends React.Component {
  state;
  constructor(props) {
    super(props);
    this.state = { userData: [] };
  }
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        this.setState({ userData: resp.data });
      })
      .catch(() => {});
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.userData)}</pre>
        {this.state.userData.length > 0 ? (
          <>
            <table border={2}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {this.state.userData.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.address.city}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <h2>No Data</h2>
          </>
        )}
      </div>
    );
  }
}
export default Users2;
