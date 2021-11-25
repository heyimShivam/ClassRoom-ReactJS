import "./register.css"
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import React from "react";
import { NavLink } from 'react-router-dom';

function Register() {
    const [registerModal, setregisterModal] = useState(true);
  const registerModalClose = () => setregisterModal(false);
  const registerModalCloseUpdate = () => {
    setregisterModal(false);
  }
    return (
        <div>
           <Modal show={registerModal} onHide={registerModalClose} backdrop="static" keyboard={false}
            size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <div className="container">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Class ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter classroom ID" />
                        <Form.Text className="text-muted">
                          Given by the College
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="******************" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="******************" />
                      </Form.Group>
                      </div>
              </Modal.Body>
                <Modal.Footer>
                    
                <NavLink className="nav-link btn btn-primary" onClick={registerModalClose} to="/login" exact style={{color:'white'}}>
                Login
              </NavLink>
                
              <NavLink className="nav-link btn btn-success" onClick={registerModalCloseUpdate} to="/login" exact style={{color:'white'}}>
                Register
              </NavLink>
              </Modal.Footer>
      </Modal>
        </div>
    )
}
export default Register;