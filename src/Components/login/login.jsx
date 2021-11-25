
import "./login.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import React from "react";
import { NavLink } from 'react-router-dom';
import  Auth  from '../../auth'

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

  // when user click Login
  const loginModalCloseSet = () => {
      setloginModal(false);
      if (true){
        Auth.authenticate();
      }
    console.log('email: '+email+ ' password : ' + password)
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
                
              <NavLink className="nav-link btn btn-success" onClick={loginModalCloseSet} to="/" exact style={{color:'white'}}>
                Login
              </NavLink>
              </Modal.Footer>
      </Modal>
    )
}
export default Login;