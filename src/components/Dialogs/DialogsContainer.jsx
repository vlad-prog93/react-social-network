import { newMessageTextActionCreator, sentMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    users: state.dialogsPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    typeNewMessageText: (message) => dispatch(newMessageTextActionCreator(message.target.value)),
    sentMessage: () => dispatch(sentMessageActionCreator())
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

/*
const DialogsContainer = (props) => {
  return <MyContext.Consumer>
    {
      store => {
        const typeNewMessageText = (message) => {
          store.dispatch(newMessageTextActionCreator(message.target.value))
        }

        const sentMessage = () => {
          store.dispatch(sentMessageActionCreator())
        }
        const state = store.getState()

        return <Dialogs
          messages={state.dialogsPage.messages}
          newMessageText={state.dialogsPage.newMessageText}
          users={state.dialogsPage.users}
          typeNewMessageText={typeNewMessageText}
          sentMessage={sentMessage} />
      }
    }

  </MyContext.Consumer>
} */