import Post from '../post/Post'
import './index.css'

const PostList = ({ postListData }) => {
  return (
    <div className="PostList">
      {postListData.map(post => <Post postData={post} key={post.id} />)}
    </div>
  )
}

export default PostList