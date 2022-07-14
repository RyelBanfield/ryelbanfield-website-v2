/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { motion } from 'framer-motion';

import { createTheme, NextUIProvider } from '@nextui-org/react';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const lightTheme = createTheme({
    type: 'light',
  });

  const darkTheme = createTheme({
    type: 'dark',
  });

  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <motion.main
          key={router.route}
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
          }}
          transition={{
            default: { duration: 1 },
          }}
        >
          <Component {...pageProps} />
        </motion.main>
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default MyApp;
