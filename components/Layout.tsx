import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'

const Layout = ({children}:PropsWithChildren) => {
  return (
      <div>
          <Navbar />
          <main>
              {children}
          </main>
    </div>
  )
}

export default Layout