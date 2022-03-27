import classes from './Message.module.css'

const Message = (props) => {
    return (
        <li key={props.id} className={classes.message}>
            {props.message}
        </li>
    )
}

export default Message