import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './home/Home'
import { ProductList } from './products/ProductList'
import { Layout } from './shared/Layout'

export const Router: FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/products' component={ProductList} />
        <Route path='/' component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
