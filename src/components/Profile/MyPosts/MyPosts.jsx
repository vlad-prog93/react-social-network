import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { newPostTextActionCreator, addPostActionCreator } from "../../../redux/profileReducer";



const MyPosts = (props) => {
  const text = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const newPostText = (text) => {
    props.dispatch(newPostTextActionCreator(text.target.value))
  }

  return (
    <div>
      My posts

      <div>
        <textarea className={classes.textpost} value={props.newPostText} onChange={newPostText} ref={text} placeholder="Введите текст"></textarea>
        <button onClick={addPost}>Add post</button>
        <button>Remove post</button>
      </div>
      <ul className={classes.posts}>
        {props.profile.posts.map(post =>
          <Post
            key={post.id}
            name={post.name}
            link={post.link}
            post={post.post}
            likesCount={post.likesCount}
          />)}
      </ul>
    </div>
  )
}

export default MyPosts