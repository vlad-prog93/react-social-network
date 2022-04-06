import React from "react";
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts profile={props.profile} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile