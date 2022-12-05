import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import "./GetUser.css"

// const apiUrl = "https://localhost:7196/Api/User";
  const apiUrl = "https://localhost:7233/api/driver";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }

  componentDidMount() {
    axios
      // .get(apiUrl + "/GetUserDetails")
      .get(apiUrl + "/GetAllDrivers")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  

  deleteUser(userId) {
    const { users } = this.state;
    axios.delete(apiUrl + "/DeleteDriverDetails/" + userId).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.id !== userId),
      });
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div>
          <Table>
            <thead className="btn-primary">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>License No</th>
                <th>Experience</th>
                <th>Own/Rent</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} data-testid="userrow">
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.licenseNo}</td>
                  <td>{user.workExperience}</td>
                  <td>{user.ownorRent}</td>
                  <td>{user.driverAddress}</td>
                  <td>
                    
                    <Button
                      variant="danger"
                      onClick={() => this.deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default UserList;
