import { FakeProductApi } from './FakeProductApi'

export * from './FakeProductApi'
export * from './ProductApi'

export const productApi = new FakeProductApi()
