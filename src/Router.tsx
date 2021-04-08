import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './home/Home'
import { PostDetails } from './posts/PostDetails.component'
import { PostsList } from './posts/PostsList.component'
import { Layout } from './shared/Layout'

export const Router: FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/posts/:postId' component={PostDetails} />
        <Route path='/posts' component={PostsList} />
        <Route path='/' component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
