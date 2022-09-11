import { Modal } from '@mantine/core';
import React from 'react'
import { useLoginStore } from '../store/useLoginStore';

const LoginModal = () => {
    const opened = useLoginStore((state: any) => state.loginModal);
    const handleModal = useLoginStore((state: any) => state.openModal);
  return (
    <Modal
      opened={opened}
      onClose={()=>handleModal()}
      title="Introduce yourself!">
      hello
    </Modal>
  );
}

export default LoginModal