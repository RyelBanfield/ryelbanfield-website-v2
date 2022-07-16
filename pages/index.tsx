import type { NextPage } from 'next';
import Head from 'next/head';

import { Container, Spacer } from '@nextui-org/react';

import AboutMe from '@/components/Pages/HomePage/AboutMe';
import Hero from '@/components/Pages/HomePage/Hero';
import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Ryel Banfield</title>
      <meta name="description" content="Ryel Banfield's Website & Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container sm direction="column">
      <Spacer y={2} />
      <Header />
      <Spacer y={2} />
      <Hero />
      <Spacer y={2} />
      <AboutMe />
      <Spacer y={2} />
      <Footer />
    </Container>
  </>
);

export default Home;
