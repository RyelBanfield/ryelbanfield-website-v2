/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Container, createTheme, NextUIProvider } from '@nextui-org/react';

import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
        <Container xs>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default MyApp;
