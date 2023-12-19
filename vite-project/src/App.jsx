import { useState, useEffect } from 'react'
import AddPost from './components/addPost'
import PostList from './components/postList'
import './App.css'

function App() {
  const [postListData, setPostListData] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setPostListData(data.posts))
  }, [])

  return (
    <div className="App">
      <AddPost setPostListData={setPostListData} />
      <PostList postListData={postListData} />
      {/* {
        postListData.length
          ? <PostList postListData={postListData} />
          : <img src="https://i.stack.imgur.com/h6viz.gif" alt="spinner image" />
      } */}
    </div>
  )
}

export default App
