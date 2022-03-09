import './App.css';
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Compose from "./components/Compose/Compose";
import Navibar from "./components/Navbar";
import Post from "./components/Post/Post";
import Axios from "axios";
import {AuthProvider} from "./contexts/AuthContext"
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes"

function App() {
  const [posts, setPosts] = useState([]);

  async function retrievePosts() {
    const {data} = await Axios.get("https://nameless-hollows-00237.herokuapp.com/");
    setPosts(data);
  }

  function submitPost(inputTitle, inputContent){
    Axios.post('https://nameless-hollows-00237.herokuapp.com/', {
      title : inputTitle,
      content : inputContent
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(()=> {
    retrievePosts();
  },[posts]);

  return (
    <Router>
    <AuthProvider>
    <Navibar/>
        <Routes>
          <Route exact path = "/signup" element = {<Signup/>}/>
          <Route exact path = "/login" element = {<Login/>}/>
          <Route element = {<ProtectedRoutes/>}>
          <Route exact path = "/" element = {<Home posts = {posts}/>}/>
          <Route exact path = "/compose" element = {<Compose submitPost = {submitPost}/>}/>
          <Route exact path="/posts/:id" element = {<Post retrievePosts = {retrievePosts}/>}/>
          </Route>
        </Routes>
    </AuthProvider>
    </Router>
  );
}

export default App;
