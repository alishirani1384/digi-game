import { LoadingOverlay } from '@mantine/core';
import React from 'react'

const Loading = () => {
  return (
      <LoadingOverlay loaderProps={{ size: 'md', color: 'pink', variant: 'bars' }} overlayBlur={2} visible={true} />
  );
}

export default Loading