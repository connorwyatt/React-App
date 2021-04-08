import { useMutation, useQueryClient } from 'react-query'
import { PostDefinition } from '../api'

const addPost = async (definition: PostDefinition): Promise<any> => {
  await window.fetch(
    'https://jsonplaceholder.typicode.com/posts',
    { method: 'post', body: JSON.stringify(definition) }
  )
}

interface PostsActions {
  addPost: (definition: PostDefinition) => Promise<any>
}

export const usePostsActions = (): PostsActions => {
  const queryClient = useQueryClient()

  const addPostMutation = useMutation(addPost, {
    onSuccess: async () => await queryClient.invalidateQueries('posts')
  })

  return {
    addPost: async (definition: PostDefinition) => {
      await addPostMutation.mutateAsync(definition)
    }
  }
}
