import { createContext } from 'react'
import { ProductsActionsContextType } from './ProductsActionsContextType'

export const ProductsActionsContext = createContext<ProductsActionsContextType>(null!)
