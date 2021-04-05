import { useContext } from 'react'
import { ProductsActionsContext } from './ProductsActionsContext'

export const useProductsActions = () => useContext(ProductsActionsContext)
