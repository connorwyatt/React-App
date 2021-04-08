import { FC } from 'react'
import {
  QueryClient,
  QueryClientProvider as RQQueryClientProvider
} from 'react-query'

const queryClient = new QueryClient()

export const QueryClientProvider: FC = ({ children }) => (
  <RQQueryClientProvider client={queryClient}>
    {children}
  </RQQueryClientProvider>
)
