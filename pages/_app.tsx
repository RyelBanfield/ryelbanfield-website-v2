/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <Component {...pageProps} />
  </NextUIProvider>
);

export default MyApp;
