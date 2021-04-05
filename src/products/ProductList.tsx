import { FC, useState } from 'react'
import { useProductsActions } from './context/useProductsActions.hook'
import { useProducts } from './useProducts.hook'

export const ProductList: FC = () => {
  const { data: products, isValidating } = useProducts()
  const { refresh, addNewProduct } = useProductsActions()
  const isLoading = isValidating && products == null
  const [productName, setProductName] = useState('')

  return (
    <div>
      <h1>Products</h1>
      <div>
        <button type='button' onClick={refresh}>Refresh</button> {isValidating && <span>Refreshing...</span>}
      </div>
      <div>
        <input type='text' placeholder='Product Name' value={productName} onChange={e => setProductName(e.target.value)} />
        <button type='button' onClick={() => addNewProduct({ name: productName, price: Math.round(Math.random() * 3000), numberInStock: Math.round(Math.random() * 400) })}>Add New Product</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        products?.map(p => (
          <div key={p.id}>
            <h2>{p.name}{p.isOptimistic ? ' (Inserting)' : ` (${p.id})`}</h2>
            <p>£{p.price} - {p.numberInStock} left in stock</p>
          </div>
        ))
      )}
    </div>
  )
}
