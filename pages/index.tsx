import type { NextPage } from 'next';
import Head from 'next/head';

import { Container, Spacer } from '@nextui-org/react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Nav from '../components/Nav';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Ryel Banfield</title>
      <meta name="description" content="Ryel Banfield's Personal Website & Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container>
      <Spacer y={2} />
      <Header />
      <Spacer y={2} />
      <Hero />
      <Spacer y={2} />
      <Nav />
    </Container>
  </>
);

export default Home;
