import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <>
      <img className={classes.profile__img} src="https://picwalls.ru/img/gallery/27/thumbs/thumb_l_3366pw.jpg" />
      <div>
        ava + description
      </div>
    </>
  )
}

export default ProfileInfo