import { FC, useMemo } from 'react'
import { productApi } from '../api'
import { ProductDefinition } from '../api/ProductDefinition'
import { useProducts } from '../useProducts.hook'
import { ProductsActionsContext } from './ProductsActionsContext'
import { ProductsActionsContextType } from './ProductsActionsContextType'

export const ProductsActionsProvider: FC = ({ children }) => {
  const { mutate } = useProducts()
  const value = useMemo<ProductsActionsContextType>(
    () => ({
      refresh () {
        mutate()
      },
      addNewProduct (product: ProductDefinition) {
        (async () => {
          mutate(products => [...(products ?? []), { id: `${Math.random()}`, isOptimistic: true, ...product }], false)

          await productApi.addProduct(product)

          mutate()
        })()
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
