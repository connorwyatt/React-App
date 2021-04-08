import { useQuery, useQueryClient } from 'react-query'
import { UseQueryResult } from 'react-query/types/react/types'
import { Post } from '../api'

const getPost = async (id: string): Promise<Post> => {
  const response = await window.fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { method: 'get' }
  )
  return await response.json()
}

export const usePost = (id: string): UseQueryResult<Post, Error> => {
  const queryClient = useQueryClient()
  return useQuery(
    ['post', id],
    async () => await getPost(id),
    {
      initialData: () => {
        const posts = queryClient.getQueryData<Post[]>('posts')
        return posts?.find(p => p.id.toString() === id)
      },
      staleTime: 60000
    }
  )
}
