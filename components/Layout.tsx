import { Affix, Button, Container, Transition } from '@mantine/core'
import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar';
import {FaArrowUp} from 'react-icons/fa'
import { useWindowScroll } from '@mantine/hooks';
import { useLanguage } from '../hooks/useLanguage';

const Layout = ({ children }: PropsWithChildren) => {
  const [scroll, scrollTo] = useWindowScroll();
  const { t } = useLanguage();
  return (
    <div>
      <Container>
      <Navbar />
      <main>{children}</main>
      <Affix position={{ bottom: 90, right: 50 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<FaArrowUp size={16}/>}
                style={transitionStyles}
                color='orange'
              onClick={() => scrollTo({ y: 0 })}>
              {t.scrolltotop}
            </Button>
          )}
        </Transition>
      </Affix>
    </Container>
    </div>
    
  );
}

export default Layout