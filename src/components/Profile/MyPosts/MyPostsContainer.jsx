import MyPosts from './MyPosts'
import { newPostTextActionCreator, addPostActionCreator } from "../../../redux/profileReducer"
import { connect } from "react-redux"


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    addNewPostText: (text) => dispatch(newPostTextActionCreator(text.target.value))
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer



/*
const MyPostsContainer = (props) => {

  return <MyContext.Consumer>
    {
      store => {
        const addPost = () => {
          store.dispatch(addPostActionCreator())
        }
        const addNewPostText = (text) => {
          store.dispatch(newPostTextActionCreator(text.target.value))
        }
        const state = store.getState()

        return <MyPosts
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
          addPost={addPost}
          addNewPostText={addNewPostText}
        />
      }
    }

  </MyContext.Consumer>
}
*/