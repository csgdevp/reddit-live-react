import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

function Reddit(){
  const [posts, setPosts] = useState([]);

   useEffect(() => {
       axios.get(`https://www.reddit.com/r/reactjs.json`)
       .then(res => {
           const newPosts = res.data.data.children.map(obj => obj.data)
           setPosts(newPosts)
       })
   },[])

   return (
       <div>
           <h1>Posts from Reddit: /r/reactjs</h1>
           <ul>
               {posts.map(post => (
                   <li key={post.id}>{post.title}, author of the post is {post.author_fullname} and Score is: {post.score}. Find more <a target="_blank" href={post.url}>here!</a></li>
               ))}
           </ul>
       </div>
   )
}

ReactDOM.render(
  <Reddit />, document.getElementById("root"));