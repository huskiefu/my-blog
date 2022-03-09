import React, {useRef,useState} from 'react'
import {Form,Button,Card,Container,Alert} from "react-bootstrap";
import {useAuth} from "../../contexts/AuthContext"
import {Link,useNavigate} from "react-router-dom"

const Login = () => { 
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

    async function handleSubmit(e){
      e.preventDefault()
      try {
        setError('')
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value)
        navigate("/")
    } catch {
      setError('Failed to Login');
    }
    setLoading(false);
  }
  return (
    <>
    <Container 
      className = "d-flex align-items-center justify-content-center"
      style = {{minHeight : "100vh"}}
      >
      <div className = "w-100" style = {{maxWidth:"400px"}}>
      <Card>
            <Card.Body>
                <h2 className = "text-cetner mb-4">Login In</h2>
                {error && <Alert variant = "danger">{error}</Alert>}
                <Form onSubmit = {handleSubmit}>
                    <Form.Group id = "email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" ref = {emailRef} required/>
                    </Form.Group>
                    <Form.Group id = "password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" ref = {passwordRef} required/>
                    </Form.Group>
                    <Button disabled = {loading} type = "submit" className = "w-100" style = {{marginTop : "1rem"}}>Login</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className = "w-100 text-center mt-2">
            Don't have an account? <Link to = "/signup">Sign Up</Link>
        </div>
      </div>
      </Container>
    </>
  )
}

export default Login