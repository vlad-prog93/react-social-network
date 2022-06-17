const dialogsReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE-MESSAGE-TEXT':
      state.newMessage = action.message
      return state
    case 'ADD-MESSAGE':
      const data = {}
      data['id'] = 4
      data['message'] = state.newMessage
      state.messages.unshift(data)
      state.newMessage = ''
      return state
    default:
      return state
    }
}

export const newMessageTextActionCreator = (message) => {
  return { type:'UPDATE-MESSAGE-TEXT', message }
}

export const sentMessageActionCreator = () => {
  return { type:'ADD-MESSAGE' }
}

export default dialogsReducer