import { FC } from 'react'
import { usePost } from './hooks/usePost.hook'
import { useParams } from 'react-router-dom'

interface RouteParams {
  postId: string
}

export const PostDetails: FC = () => {
  const { postId } = useParams<RouteParams>()
  const { data: post, refetch } = usePost(postId)

  return (
    <div>
      <h1>{post?.title}</h1>
      <div>
        <button type='button' onClick={async () => await refetch()}>Refresh</button>
      </div>
      <p>{post?.body}</p>
    </div>
  )
}
