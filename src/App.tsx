import React, { FC } from 'react'
import { Router } from './Router'
import { QueryClientProvider } from './shared/QueryClientProvider'
import { ReactQueryDevtools } from 'react-query/devtools'

export const App: FC = () => (
  <QueryClientProvider>
    <Router />
    <ReactQueryDevtools />
  </QueryClientProvider>
)
