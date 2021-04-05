import React, { FC } from 'react'
import { ContextProviders } from './ContextProviders'
import { Router } from './Router'

export const App: FC = () => (
  <ContextProviders>
    <Router />
  </ContextProviders>
)
