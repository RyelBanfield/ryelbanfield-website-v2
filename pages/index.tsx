import type { NextPage } from 'next';
import Head from 'next/head';

import { Container, Spacer } from '@nextui-org/react';

import AboutMe from '@/components/HomePage/AboutMe';
import Header from '@/components/HomePage/Header';
import Hero from '@/components/HomePage/Hero';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Ryel Banfield</title>
      <meta name="description" content="Ryel Banfield's Personal Website & Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container sm>
      <Spacer y={2} />
      <Header />
      <Spacer y={2} />
      <Hero />
      <Spacer y={2} />
      <AboutMe />
    </Container>
  </>
);

export default Home;
