import { LoadingOverlay } from '@mantine/core';
import React from 'react'

const Loading = () => {
  return (
    <div>
      <LoadingOverlay overlayBlur={2} visible={true} />
    </div>
  );
}

export default Loading