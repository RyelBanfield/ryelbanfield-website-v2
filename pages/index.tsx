import type { NextPage } from 'next';
import Head from 'next/head';
import { Text } from '@nextui-org/react';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Ryel Banfield's website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Text h1>Hello World!</Text>
  </>
);

export default Home;
