const initialState = {

    posts: [
      {
        id: 1,
        name: 'Коля',
        link: 'https://avatars.mds.yandex.net/i?id=d08938cbf3f48ae96c6744b9b4e57c44-5352988-images-thumbs&n=13',
        post: 'Как дела?',
        likesCount: 1
      },
      {
        id: 2,
        name: 'НиКола',
        link: 'https://avatars.mds.yandex.net/i?id=7fc4963e48c3f675facb64e0fdee2507-5236077-images-thumbs&n=13',
        post: 'Какие дела?',
        likesCount: 5
      },
    ],
    newPostText: '',


}

const profileReducer = (state = initialState, action) => {
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
  return { type: 'UPDATE-POST-TEXT', text }
}

export const addPostActionCreator = () => {
  return { type: 'ADD-POST' }
}

export default profileReducer