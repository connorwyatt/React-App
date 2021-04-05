import { ProductDefinition } from '../api/ProductDefinition'

export interface ProductsActionsContextType {
  refresh: () => void
  addNewProduct: (product: ProductDefinition) => void
}
