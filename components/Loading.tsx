import { LoadingOverlay } from '@mantine/core';
import React from 'react'

const Loading = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-[1001]'>
      <LoadingOverlay loaderProps={{ size: 'md', color: 'pink', variant: 'bars' }} overlayBlur={2} visible={true} />
    </div> 
  );
}

export default Loading