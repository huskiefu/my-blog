import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import "../App.css"
import {useAuth} from "../contexts/AuthContext"

const Navibar = () => {
  const [error,setError] = useState('');
  const {currentUser, logout} = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    setError('');
    try {
      await logout();
      navigate("/login");
    }
    catch {
      setError('Failed to Logout');
      console.log(error)
    }
  }

  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home" className = "navbar-brand">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link as={Link} to = "/">Home</Nav.Link>
    <Nav.Link as={Link} to = "/compose">Compose</Nav.Link>
    {currentUser && <Nav.Link onClick = {handleLogout} style= {{position:"absolute", right:"2rem"}}>Logout</Nav.Link>}
    </Nav>
  </Navbar>
  )
}

export default Navibar

                