import React from "react";
import './Sidebar.css'

const Sidebar = () => {
  return (
      <ul className="sidebar">
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Messages</a>
        </li>
        <li>
          <a>News</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
      </ul>
  )
}

export default Sidebar