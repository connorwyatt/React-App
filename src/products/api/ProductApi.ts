import { Product } from './Product'

export interface ProductApi {
  getProducts: () => Promise<Product[]>
  getProduct: (id: string) => Promise<Product | null>
}
