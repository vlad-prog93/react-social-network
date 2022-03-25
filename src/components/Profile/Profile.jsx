import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <>
      <img className={classes.profile__img} src="https://picwalls.ru/img/gallery/27/thumbs/thumb_l_3366pw.jpg" />
      <div>
        ava + description
      </div>
      <MyPosts />
    </>
  )
}

export default Profile