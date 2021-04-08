import { useQuery } from 'react-query'
import { UseQueryResult } from 'react-query/types/react/types'
import { Post } from '../api'

const getPosts = async (): Promise<Post[]> => {
  const response = await window.fetch(
    'https://jsonplaceholder.typicode.com/posts',
    { method: 'get' }
  )
  return await response.json()
}

export const usePosts = (): UseQueryResult<Post[], Error> => useQuery(
  'posts',
  getPosts,
  { staleTime: 60000 }
)
