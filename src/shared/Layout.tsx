import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
