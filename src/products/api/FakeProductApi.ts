import { delay } from '../../utils'
import { Product } from './Product'
import { ProductApi } from './ProductApi'

export class FakeProductApi implements ProductApi {
  private readonly _products: Product[] = []

  constructor () {
    this._products = [
      {
        id: '1',
        name: 'Best Product Ever',
        price: 200,
        numberInStock: 0
      },
      {
        id: '2',
        name: 'Worst Product Ever',
        price: 30,
        numberInStock: 956
      },
      {
        id: '3',
        name: 'Mediocre Product',
        price: 100,
        numberInStock: 48
      }
    ]
  }

  public async getProducts (): Promise<Product[]> {
    await delay(Math.random() * 2500)
    return this._products
  }

  public async getProduct (id: string): Promise<Product | null> {
    await delay(Math.random() * 2500)
    return this._products.find(p => p.id === id) ?? null
  }
}
