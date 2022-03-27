import { NavLink } from "react-router-dom"
import classes from './User.module.css'

const User = (props) => {
    return (
        <li className={classes.user}>
            <NavLink className={navData => navData.isActive ? classes.user__link_active : classes.user__link} to={props.id}>{props.name}</NavLink>
        </li>
    )
}

export default User