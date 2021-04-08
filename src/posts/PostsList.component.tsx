import { FC } from 'react'
import { usePosts } from './hooks/usePosts.hook'
import { Link } from 'react-router-dom'
import { usePostsActions } from './hooks/usePostsActions.hook'

export const PostsList: FC = () => {
  const { data: posts, refetch } = usePosts()
  const { addPost } = usePostsActions()

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <button type='button' onClick={async () => await refetch()}>Refresh</button>
        <button type='button' onClick={async () => await addPost({ userId: 1, title: 'Testing', body: 'Hello' })}>Add New</button>
      </div>
      <ul>
        {posts?.map(p => (
          <li key={p.id}>
            <h2><Link to={`/posts/${p.id}`}>{p.title}</Link></h2>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
