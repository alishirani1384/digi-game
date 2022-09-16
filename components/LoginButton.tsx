import { Button } from '@mantine/core';
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';


const LoginButton = ({ Icon, name }: any) => {
  const {t}=useLanguage()
    let color: string;
    if (name == "Twitter") {
        color = "#42c8f5";
    } else if (name == "Google") {
        color = "#f54242";
    }
  return (
    <Button
      leftIcon={Icon}
      styles={(theme) => ({
        root: {
          backgroundColor: color,
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,
          "&:hover": {
            backgroundColor: color,
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}>
      {t.loginbtn} {name}
    </Button>
  );
}

export default LoginButton