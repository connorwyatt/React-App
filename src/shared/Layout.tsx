import React, { FC } from 'react'
import { useIsFetching } from 'react-query'
import { Link } from 'react-router-dom'

export const Layout: FC = ({ children }) => {
  const isFetching = useIsFetching()

  return (
    <div>
      <nav>
        <div style={{ backgroundColor: 'red', color: 'white', opacity: isFetching > 0 ? 1 : 0 }}>Refetching some data ({isFetching}).</div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
