
import "./login.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import React from "react";
import { NavLink } from 'react-router-dom';

function Login() {
    const [loginModal, setloginModal] = useState(true);
       const loginModalClose = () => setloginModal(false);
        return (
            <Modal show={loginModal} onHide={loginModalClose} backdrop="static" keyboard={false}
            size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title>Login </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <div className="container">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                    
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      </div>
              </Modal.Body>
                <Modal.Footer>
                    
                <NavLink className="nav-link btn btn-primary" onClick={loginModalClose} to="/register" exact style={{color:'white'}}>
                Register
              </NavLink>
                
              <NavLink className="nav-link btn btn-success" onClick={loginModalClose} to="/" exact style={{color:'white'}}>
                Login
              </NavLink>
              </Modal.Footer>
      </Modal>
    )
}
export default Login;