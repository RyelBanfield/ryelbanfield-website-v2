/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Container, createTheme, NextUIProvider } from '@nextui-org/react';

import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const fonts = {
    sans: 'IBM Plex Sans, sans-serif',
    mono: 'IBM Plex Mono, monospace',
  };

  const darkTheme = createTheme({
    type: 'dark',
    theme: { fonts },
  });

  return (
    <NextThemesProvider defaultTheme="dark" attribute="class" value={{ dark: darkTheme.className }}>
      <NextUIProvider>
        <Container responsive>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default MyApp;
