import { Container } from '@mantine/core'
import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'

const Layout = ({children}:PropsWithChildren) => {
  return (
      <Container>
          <Navbar />
          <main>
              {children}
          </main>
    </Container>
  )
}

export default Layout