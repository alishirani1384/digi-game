import { Affix, Button, Container, Transition } from '@mantine/core'
import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar';
import {FaArrowUp} from 'react-icons/fa'
import { useWindowScroll } from '@mantine/hooks';

const Layout = ({ children }: PropsWithChildren) => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div>
      <Container>
      <Navbar />
      <main>{children}</main>
      <Affix position={{ bottom: 100, right: 50 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<FaArrowUp size={16}/>}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}>
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </Container>
    </div>
    
  );
}

export default Layout