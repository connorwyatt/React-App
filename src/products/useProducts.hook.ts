import useSWR from 'swr'
import { SWRResponse } from 'swr/dist/types'
import { productApi } from './api'
import { Product } from './api/Product'

const KEY = 'useProducts'

const productsFetcher = async (): Promise<Product[]> => await productApi.getProducts()

export const useProducts = (): SWRResponse<Product[], Error> => useSWR(KEY, productsFetcher)
