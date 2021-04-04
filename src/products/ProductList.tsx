import { FC } from 'react'
import { useProductsActions } from './context/useProductsActions.hook'
import { useProducts } from './useProducts.hook'

export const ProductList: FC = () => {
  const { data: products, isValidating } = useProducts()
  const { refresh } = useProductsActions()

  return (
    <div>
      <h1>Products</h1>
      <div>
        <button type={'button'} onClick={refresh}>Refresh</button>
      </div>
      {!isValidating && (products != null) ? (
        products.map(p => (
          <div key={p.id}>
            <h2>{p.name}</h2>
            <p>£{p.price} - {p.numberInStock} left in stock</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
