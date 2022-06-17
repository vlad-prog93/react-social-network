import React from 'react';
import classes from './Dialogs.module.css';
import User from './User/User'
import Message from './Message/Message'
import { newMessageTextActionCreator, sentMessageActionCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {
  const message = React.createRef();
  const newMessageText = (message) => {
    props.dispatch(newMessageTextActionCreator(message.target.value))
  }

  const sentMessage = () => {
    props.dispatch(sentMessageActionCreator())
  }

  return (
    <div className={classes.dialogs}>
      <ul className={classes.users}>
        {props.state.users.map(user => <User key={user.id} id={`${user.id}`} name={user.name} />)}
      </ul>
      <ul className={classes.messages}>
        {props.state.messages.map(message => <Message key={message.id} message = {message.message} />)}
      </ul>
      <textarea ref={message} value={props.state.newMessageText} onChange={newMessageText} placeholder='Введите текст'></textarea>
      <button onClick={sentMessage}>Отправить</button>
    </div>
  )
}

export default Dialogs