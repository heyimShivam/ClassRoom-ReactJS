
import "./login.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import React from "react";
import { NavLink } from 'react-router-dom';
import  Auth  from '../../auth'
import axios from 'axios';

function Login() {
  const [loginModal, setloginModal] = useState(true);
  const loginModalClose = () => setloginModal(false);

  // variable for user input
  const [email, setEmail] = useState('');
  const emailUpdate = (event) => {
    setEmail(event.target.value);
  }
  const [password, setPassword] = useState('');
  const passwordUpdate = (event) => {
    setPassword(event.target.value);
  }
  const userDetails ={
    email: email,
    password: password
  }

  // when user click Login
  const loginModalCloseSet = () => {
    loginModalClose();
      axios.post('http://localhost:5000/api/users/login', userDetails).then(
      (res) => {
        console.log('login details: ' + JSON.stringify(res));
          Auth.authenticate();
      }
    ).catch(
      error => {
        console.error('There was an error!', error);
      }
    )
  };

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
                  <Form.Control type="email" placeholder="Enter email" onChange={emailUpdate} value={email}/>
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                    
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={passwordUpdate} value={password}/>
                      </Form.Group>
                      </div>
              </Modal.Body>
                <Modal.Footer>
                    
                <NavLink className="nav-link btn btn-primary" onClick={loginModalClose} to="/register" exact style={{color:'white'}}>
                Register
              </NavLink>
                
              <NavLink className="nav-link btn btn-success" onClick={() => { loginModalCloseSet();loginModalClose(); }} to="/classroom" exact style={{color:'white'}}>
                Login
              </NavLink>
              </Modal.Footer>
      </Modal>
    )
}
export default Login;