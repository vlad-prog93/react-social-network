const initialState = {

    users: [
      {
        id: 1, name: 'Nikolya'
      },
      {
        id: 2, name: 'Vlad'
      }, {
        id: 3, name: 'Igor'
      },
    ],
    messages: [
      {
        id: 1, message: 'Hello Igor'
      },
      {
        id: 2, message: 'How are you?'
      },
      {
        id: 3, message: 'Something right!'
      }
    ],
    newMessage: '',

}

const dialogsReducer = (state = initialState, action) => {
  const stateCopy = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'UPDATE-MESSAGE-TEXT':
      stateCopy.newMessage = action.message
      return stateCopy
    case 'ADD-MESSAGE':
      const data = {}
      data['id'] = 4
      data['message'] = stateCopy.newMessage
      stateCopy.messages.unshift(data)
      stateCopy.newMessage = ''
      return stateCopy
    default:
      return state
  }
}

export const newMessageTextActionCreator = (message) => {
  return { type: 'UPDATE-MESSAGE-TEXT', message }
}

export const sentMessageActionCreator = () => {
  return { type: 'ADD-MESSAGE' }
}

export default dialogsReducer