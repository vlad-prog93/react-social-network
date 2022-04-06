import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
  const text = React.createRef();

  const addPost = () => {
    props.dispatch({type: 'ADD-POST'})
  }

  const newPostText = () => {
    props.dispatch({type: 'UPDATE-POST-TEXT', text: text.current.value})
  }

  return (
    <div>
      My posts

      <div>
        <textarea className={classes.textpost} onChange={newPostText} value={props.profile.newPostText} ref={text} placeholder="Введите текст"></textarea>
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