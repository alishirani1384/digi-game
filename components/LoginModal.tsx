import { Checkbox, Container, Input, Modal } from '@mantine/core';
import React from 'react'
import { useLoginStore } from '../store/useLoginStore';
import { MdAlternateEmail, MdPassword } from "react-icons/md";
import LoginButton from './LoginButton';
import { FiTwitter } from "react-icons/fi";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const LoginModal = () => {
    const opened = useLoginStore((state: any) => state.loginModal);
    const handleModal = useLoginStore((state: any) => state.openModal);
  return (
    <Modal title="Welcome back😊" withCloseButton={false} opened={opened} onClose={handleModal}>
      <Container className="space-y-4">
        <Input icon={<MdAlternateEmail />} placeholder="Your email" />
        <Input icon={<MdPassword />} placeholder="Your password" />
        <Checkbox label="I agree to Terms." />
        <div className="flex flex-col">
          <LoginButton Icon={<FiTwitter size={20} />} name="Twitter" />
          <LoginButton Icon={<FaGoogle size={20} />} name="Google" />
          <LoginButton Icon={<FaFacebookF size={20} />} name="Facebook" />
        </div>
      </Container>
    </Modal>
  );
}

export default LoginModal