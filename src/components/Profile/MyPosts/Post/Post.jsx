import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <li className={classes.post}>
      <img className={classes.post__img} src={props.link} />
      {props.name}
      {props.post}
      <div>
        <span>like</span> {props.likesCount}
      </div>

    </li>
  )
}

export default Post