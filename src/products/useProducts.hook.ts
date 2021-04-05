import useSWR, { SWRConfiguration, SWRResponse } from 'swr'
import { Optimistic } from '../shared/api/Optimistic'
import { productApi } from './api'
import { Product } from './api/Product'

const KEY = 'useProducts'

const productsFetcher = async (): Promise<Array<Product & Optimistic>> => await productApi.getProducts()

const options: SWRConfiguration<Array<Product & Optimistic>, Error> = {
  shouldRetryOnError: true,
  errorRetryInterval: 0,
  errorRetryCount: 2,
  revalidateOnFocus: false,
  revalidateOnReconnect: false
}

export const useProducts = (): SWRResponse<Array<Product & Optimistic>, Error> => useSWR(KEY, productsFetcher, options)
