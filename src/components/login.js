import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Button, Card, Form, Row, Col } from 'react-bootstrap';



const Login = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [msg, setMsg] = useState(' ');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password,
            });
            navigate("/Dashboard");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
            
        }
      }

      const navReg = () => {
        navigate('/Register');
      }

    return (
    <div className="login_page">
    <Container fluid className='d-flex justify-content-center align-items-center'>
        <Card bg='dark' text='light'  style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title className='judul_login text-center'>
                SIGN IN
            </Card.Title>
            <Form onSubmit={ Auth }>
            <p className='text-center'>{msg}</p>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="form" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="form" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Row>
                <Col sm>
                    <Button variant="primary" type="submit">Login</Button>
                </Col>
                <Col sm>
                    <Button variant="warning" onClick={navReg}>Register</Button>
                </Col>
            </Row>
            </Form>
        </Card.Body>
        </Card>
    </Container>
    </div>
    )
}

export default Login
