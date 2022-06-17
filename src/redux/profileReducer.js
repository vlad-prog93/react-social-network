const profileReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE-POST-TEXT':
      state.newPostText = action.text
      return state
    case 'ADD-POST':
      const data = {}
      data['id'] = 4
      data['name'] = 'puk'
      data['link'] = 'https://avatars.mds.yandex.net/i?id=d08938cbf3f48ae96c6744b9b4e57c44-5352988-images-thumbs&n=13'
      data['post'] = state.newPostText
      data['likesCount'] = 0
      state.posts.unshift(data)
      state.newPostText = ''
      return state
    default:
      return state
    }
    
}

export const newPostTextActionCreator = (text) => {
  return { type:'UPDATE-POST-TEXT', text }
}

export const addPostActionCreator = () => {
  return { type:'ADD-POST' }
}

export default profileReducer