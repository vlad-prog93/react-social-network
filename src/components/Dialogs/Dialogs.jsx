import React from 'react';
import classes from './Dialogs.module.css';
import User from './User/User'
import Message from './Message/Message'

const Dialogs = (props) => {
  const message = React.createRef()

  const typeNewMessageText = (message) => props.typeNewMessageText(message)

  const sentMessage = () => props.sentMessage()

  return (
    <div className={classes.dialogs}>
      <ul className={classes.users}>
        {props.users.map(user => <User key={user.id} id={`${user.id}`} name={user.name} />)}
      </ul>
      <ul className={classes.messages}>
        {props.messages.map(message => <Message key={message.id} message = {message.message} />)}
      </ul>
      <textarea ref={message} value={props.newMessageText} onChange={typeNewMessageText} placeholder='Введите текст'></textarea>
      <button onClick={sentMessage}>Отправить</button>
    </div>
  )
}

export default Dialogs