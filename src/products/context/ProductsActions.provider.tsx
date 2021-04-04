import { FC, useMemo } from 'react'
import { useProducts } from '../useProducts.hook'
import { ProductsActionsContext } from './ProductsActionsContext'
import { ProductsActionsContextType } from './ProductsActionsContextType'

export const ProductsActionsProvider: FC = ({ children }) => {
  const { mutate } = useProducts()
  const value = useMemo<ProductsActionsContextType>(
    () => ({
        refresh() {
          mutate()
        }
    }),
    [mutate]
  )
  return (
    <ProductsActionsContext.Provider value={value}>
      {children}
    </ProductsActionsContext.Provider>
  )
}

