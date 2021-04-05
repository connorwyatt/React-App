import { Reference } from '../../shared/api/Reference'
import { delay } from '../../utils'
import { Product } from './Product'
import { ProductApi } from './ProductApi'
import { ProductDefinition } from './ProductDefinition'

export class FakeProductApi implements ProductApi {
  private readonly _products: Product[] = []

  constructor () {
    this._products = [
      {
        id: Math.round(Math.random() * 100000000).toString(),
        name: 'Best Product Ever',
        price: 200,
        numberInStock: 0
      },
      {
        id: Math.round(Math.random() * 100000000).toString(),
        name: 'Worst Product Ever',
        price: 30,
        numberInStock: 956
      },
      {
        id: Math.round(Math.random() * 100000000).toString(),
        name: 'Mediocre Product',
        price: 100,
        numberInStock: 48
      }
    ]
  }

  public async getProducts (): Promise<Product[]> {
    console.log('getting products')
    await delay(Math.random() * 2500)
    if (Math.random() > 0.75) {
      console.log('failed')
      throw new Error()
    } else {
      return this._products
    }
  }

  public async getProduct (id: string): Promise<Product | null> {
    await delay(Math.random() * 2500)
    return this._products.find(p => p.id === id) ?? null
  }

  public async addProduct (product: ProductDefinition): Promise<Reference> {
    await delay(Math.random() * 2500)
    const id = Math.round(Math.random() * 100000000).toString()
    this._products.push({
      id,
      name: product.name,
      price: product.price,
      numberInStock: product.numberInStock
    })
    return { id }
  }
}
