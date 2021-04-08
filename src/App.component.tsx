import React, { FC } from 'react'
import { Router } from './Router.component'
import { QueryClientProvider } from './shared/QueryClientProvider.component'
import { ReactQueryDevtools } from 'react-query/devtools'

export const App: FC = () => (
  <QueryClientProvider>
    <Router />
    <ReactQueryDevtools />
  </QueryClientProvider>
)
