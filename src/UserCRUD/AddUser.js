import React from "react";
import "./AddUser.css";
import { Row, Form, Col, Button } from "react-bootstrap";


class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      id: '',
      regFirstname: "",
      regLastname: "",
      regEmail: "",
      regLicenseNo:"",
      regWorkExperience: "",
      regOwnorRent: "",
      regDriverAddress: "",
    };

    if (props.user.id) {
      this.state = props.user;
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.id) {
      pageTitle = <h2>Edit Driver</h2>;
      actionStatus = <b>Update</b>;
    } else {
      pageTitle = <h2>Add Driver</h2>;
      actionStatus = <b>Save</b>;
    }

    return (
      <div>
        <h2> {pageTitle}</h2>
        <Row>
          <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="regFirstname">
                <Form.Label>First Name</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regFirstname"
                  data-testid="firstname"
                  value={this.state.regFirstname}
                  onChange={this.handleChange}
                  placeholder="First Name"
                /><br/><br/>
                
              </Form.Group>
              <Form.Group controlId="regLastname">
                <Form.Label>Last Name</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regLastname"
                  data-testid="lastName"
                  value={this.state.regLastname}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                /><br/><br/>
              </Form.Group>
              <Form.Group controlId="regEmail">
                <Form.Label>Email Id</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regEmail"
                  data-testid="email"
                  value={this.state.regEmail}
                  onChange={this.handleChange}
                  placeholder="EmailId"
                /><br/><br/>


              </Form.Group>
              <Form.Group controlId="regLicenseNo">
                <Form.Label>License No</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regLicenseNo"
                  data-testid="mobile"
                  value={this.state.regLicenseNo}
                  onChange={this.handleChange}
                  placeholder="License No"
                /><br/><br/>
              </Form.Group>
              <Form.Group controlId="regWorkExperience">
                <Form.Label>Experience</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regWorkExperience"
                  data-testid="workExperience"
                  value={this.state.regWorkExperience}
                  onChange={this.handleChange}
                  placeholder="Experience"
                /><br/><br/>
              
              </Form.Group>
              <Form.Group controlId="regOwnorRent">
                <Form.Label>Own/Rent</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regOwnorRent"
                  data-testid="ownorRent"
                  value={this.state.regOwnorRent}
                  onChange={this.handleChange}
                  placeholder="Own/Rent"
                /><br/><br/>
                </Form.Group>
                <Form.Group controlId="regDriverAddress">
                <Form.Label>Address</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regDriverAddress"
                  data-testid="driverAddress"
                  value={this.state.regDriverAddress}
                  onChange={this.handleChange}
                  placeholder="Address"
                /><br/><br/>

              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="hidden"
                  name="id"
                  value={this.state.id}
                />
                <Button variant="success" type="submit">
                  {actionStatus}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddUser;