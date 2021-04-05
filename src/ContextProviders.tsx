import React, { FC } from 'react'
import { ProductsActionsProvider } from './products/context/ProductsActions.provider'

export const ContextProviders: FC = ({ children }) => (
  <ProductsActionsProvider>
    {children}
  </ProductsActionsProvider>
)
