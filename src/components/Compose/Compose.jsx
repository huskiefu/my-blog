import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from "react-bootstrap";
import "./Compose.css"
import {Link} from "react-router-dom";


const Compose = ({submitPost}) => {
  
  const [title, setTitle] = useState("");
  const [content,setContent] = useState("");

  return (
    <div className = "input-container">
      <h1>Compose</h1>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <input  type="text" value = {title} className = "title-input" onChange = {(e) => {
      setTitle(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Content</Form.Label>
    <textarea type="text" value = {content} rows = {5} className = "content-input" onChange = {(e)=> {
      setContent(e.target.value);
    }} />
  </Form.Group>
  <Button variant="primary" onClick = {() => submitPost(title,content)} as = {Link} to = {"/"}>
    Submit
  </Button>
</Form>
    </div>
  )
}

export default Compose