import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

export const store = {
    _state: {
        profile: {
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
        },
        dialogs: {
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
    },
    
    getState() {
        return this._state
    },
    _render() { },

    subscribe(observer) {
        this._render = observer
    },

    dispatch(action) {
       dialogsReducer(this._state.dialogs, action)
       profileReducer(this._state.profile, action)
       this._render()
    }
}
