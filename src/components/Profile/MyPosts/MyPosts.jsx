import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const posts = [
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
  {
    id: 3,
    name: 'Квас лавелас',
    link: 'https://avatars.mds.yandex.net/i?id=2a0000017a17316ac5a01d5cab4cdb5e2764-4568742-images-thumbs&n=13',
    post: 'квас без колы?',
    likesCount: 45
  }
]



const MyPosts = () => {
  return (
    <div>
      My posts

      <div>
        <textarea placeholder="Введите текст"></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <ul className={classes.posts}>
        {posts.map(post =>
          <Post
            key={post.id}
            name={post.name}
            link={post.link}
            post={post.post}
            likesCount={post.likesCount}
          />)}
      </ul>
    </div>
  )
}

export default MyPosts