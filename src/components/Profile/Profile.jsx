import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPostsContainer profile={props.profile} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile