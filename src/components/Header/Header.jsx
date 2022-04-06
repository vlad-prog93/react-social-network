import React from "react";
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <img src="https://img.icons8.com/metro/208/name.png" alt="logo"/>
      <h1 className={classes.header__title}>SocialNetwork</h1>
    </div>
  )
}

export default Header