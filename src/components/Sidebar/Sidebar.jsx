import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Sidebar.module.css'

const Sidebar = () => {
  return (
      <ul className={classes.sidebar}>
        <li className={`${classes.item}`}>
          <NavLink className={(navData) => navData.isActive ? classes.active : "" } to="/profile">Profile</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={(navData) => navData.isActive ? classes.active : "" } to="/dialogs">Messages</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={(navData) => navData.isActive ? classes.active : "" } to="/news">News</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={(navData) => navData.isActive ? classes.active : "" } to="/music">Music</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={(navData) => navData.isActive ? classes.active : "" } to="/settings">Settings</NavLink>
        </li>
      </ul>
  )
}

export default Sidebar