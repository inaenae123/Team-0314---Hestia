import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./register.css";

export default function Register() {
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className="Register">
        <h1>Join for free!</h1>
        <h3>Register now to find your match</h3>
        <hr />
        <div className="buttonGroup">
            <Button className="socialButtons">Register with Google</Button>
            <Button className="socialButtons" id="facebook">Register with Facebook</Button>
        </div>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="fName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              autoFocus
              type="fname"
              value={fname}
              onChange={(e) => setfName(e.target.value)}
            />
         </Form.Group>
            <Form.Group size="lg" controlId="lName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              autoFocus
              type="lname"
              value={lname}
              onChange={(e) => setlName(e.target.value)}
            />
            </Form.Group>
        <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" background="pink" disabled={!validateForm()}>
            Register
          </Button>
        </Form>
        <hr/>
      </div>
    );
  }