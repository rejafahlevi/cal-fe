import {Navbar, Container, Nav, Button} from "react-bootstrap"
import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

    const Logout = async() => {
      try {
        await axios.delete('http://localhost:5000/logout');
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }

    return (
        <>
        <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Math Calculator</Navbar.Brand>
          <Nav>
              <Button variant="light" onClick={Logout}>
                Log Out
              </Button>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
}

export default NavigationBar