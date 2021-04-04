import React, { FC } from 'react'
import { ProductsActionsProvider } from './products/context/ProductsActions.provider'
import { ProductList } from './products/ProductList'

export const App: FC = () => (
  <ProductsActionsProvider>
    <ProductList/>
  </ProductsActionsProvider>
)
