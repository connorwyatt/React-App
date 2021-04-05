import { Reference } from '../../shared/api/Reference'
import { Product } from './Product'
import { ProductDefinition } from './ProductDefinition'

export interface ProductApi {
  getProducts: () => Promise<Product[]>
  getProduct: (id: string) => Promise<Product | null>
  addProduct: (product: ProductDefinition) => Promise<Reference>
}
