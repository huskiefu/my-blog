import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Post.css"

const Post = () => {

	const {id} = useParams();
  const [post, setPost] = useState("");
  
  async function retrievePost(id){
    const url = "http://localhost:5000/posts/" + id;
    const {data} = await Axios.get(url);
    setPost(data);
  }
   
  useEffect(()=> {
    setPost(retrievePost(id));
  },[]);

  function deletePost(id){
    const url = "http://localhost:5000/posts/" + id;
    Axios.delete(url)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className = "home-container">
    <Card className='postcard'>
    <Card.Body>
    <Card.Title className = "title">{post.title}</Card.Title>
    <Card.Text  className = "content">{post.content}</Card.Text>
    <Button className = "home-button" variant = "primary" as = {Link} to = {"/"}>Back To Home</Button>
    <Button variant = "danger" onClick = {()=> deletePost(id)}  as = {Link} to = {"/"}>Delete</Button>
    </Card.Body>
    </Card>
    </div>
  )
}

export default Post