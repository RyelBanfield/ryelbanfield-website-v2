/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import {
  Container, createTheme, NextUIProvider, Theme,
} from '@nextui-org/react';

import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const colors = { background: '#121212', text: '#999' };

  const fonts = {
    sans: 'Roboto',
    mono: 'Roboto',
  };

  const customTheme: Theme = {
    theme: {
      colors,
      fonts,
    },
  };

  const darkTheme = createTheme({
    ...customTheme,
    type: 'dark',
  });

  return (
    <NextThemesProvider defaultTheme="dark" attribute="class" value={{ dark: darkTheme.className }}>
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
