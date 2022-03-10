import React from 'react';
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Home = ({posts}) => {
  return (
    <div className = "home-container">
        {posts.map(post => {
            return (
                <Card className='postcard'>
                <Card.Body>
                <Card.Title className = "title">{post.title}</Card.Title>
                {(post.content.length > 400) ? <Card.Text  className = "content">{post.content.substring(0,400) + "..."}</Card.Text> : <Card.Text className = "content">{post.content}</Card.Text>}
                <Button variant = "primary" as = {Link} to = {`/posts/${post._id}`}>Read More</Button>
                </Card.Body>
                </Card>
              )
        })}
    </div>
  )
}

export default Home