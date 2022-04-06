import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <li className={classes.post}>
      <img className={classes.post__img} src={props.link} />
      <div className={classes.post__discrub}>
        <p className={classes.post__title}>{props.name}</p>
        <p className={classes.post__discription}>{props.post}</p>
      </div>

      <div className={classes.post__likes}>
        <span>like</span> {props.likesCount}
      </div>

    </li>
  )
}

export default Post