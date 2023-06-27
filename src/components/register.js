import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Button, Card, Form, Row, Col } from 'react-bootstrap';


const Register = () => {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [confirmPassword, setConfirmPassword] = useState(' ');
  const [msg, setMsg] = useState(' ');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users', {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        });
        navigate("/");
    } catch (error) {
        if(error.response) {
            setMsg(error.response.data.msg);
        }
        
    }
  }

  return (
  <div className="register_page">
   <Container fluid className='d-flex justify-content-center align-items-center'>
    <Card bg='dark' text='light'  style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='judul_login text-center'>
            REGISTER
        </Card.Title>
        <p className='text-center'>{msg}</p>
        <Form onSubmit={ Register } >
        <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="form" 
                placeholder="Enter name" 
                name= "name"
                value={name} 
                onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="form" 
                placeholder="Enter email"
                name= "email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="form" 
                placeholder="Password"
                name= "password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="form" 
                placeholder="Confirm Password"
                name= "confirmPassword"
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                />
            </Form.Group>
            <Row>
        <Col sm>
            <Button variant="success" type='Submit'>Register</Button>
        </Col>
        </Row>
        </Form>
      </Card.Body>
    </Card>
   </Container>
  </div>
  )
}

export default Register
